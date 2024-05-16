import { reactive } from 'vue'
import { Parser, HtmlRenderer } from 'commonmark'

const mdReader = new Parser()
const mdWriter = new HtmlRenderer()

export const openapi = reactive({
  loaded: false,
  spec: {},
  title: 'No spec loaded...',
  description: '',

  loadSpec(spec) {
    this.spec = spec
    this.title = this.spec.info.title
    this.loaded = true
    this.description = mdToHtml(this.spec.info.description)
  }
})

function mdToHtml(md) {
  const parsed = mdReader.parse(md)
  return mdWriter.render(parsed)
}
