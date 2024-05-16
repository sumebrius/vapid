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

  async loadSpec(spec) {
    this.schema = await OpenAPIParser.validate(spec)

    this.title = this.schema.info.title
    this.loaded = true
    this.description = mdToHtml(this.schema.info.description)
  }
})

function mdToHtml(md) {
  const parsed = mdReader.parse(md)
  return mdWriter.render(parsed)
}
