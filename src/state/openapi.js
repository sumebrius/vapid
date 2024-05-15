import { reactive } from 'vue'

export const openapi = reactive({
  spec: {},
  title: 'No spec loaded...',

  loadSpec(spec) {
    this.spec = spec
    this.title = this.spec.info.title
  }
})
