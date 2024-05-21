import { reactive } from 'vue'
import OpenAPIParser from '@readme/openapi-parser'
import { Parser, HtmlRenderer } from 'commonmark'

const mdReader = new Parser()
const mdWriter = new HtmlRenderer()

export const openapi = reactive({
  loaded: false,
  schema: {},
  title: 'No spec loaded...',
  description: '',
  tags: {},

  async loadSpec(spec) {
    this.schema = await OpenAPIParser.validate(spec)

    this.title = this.schema.info.title
    this.description = mdToHtml(this.schema.info.description)

    this.schema.tags.forEach((tagSpec) => {
      this.tags[tagSpec.name] = {
        description: mdToHtml(tagSpec.description),
        paths: {}
      }
    })

    Object.entries(this.schema.paths).forEach((entry) => {
      const [path, operations] = entry
      Object.entries(operations).forEach((operation) => {
        operation[1].tags.forEach((tag) => {
          this.tags[tag].paths[path] = operations
        })
      })
    })

    this.loaded = true
  }
})

function mdToHtml(md) {
  const parsed = mdReader.parse(md)
  return mdWriter.render(parsed)
}
