import { reactive } from 'vue'

export const openapi = reactive({
  spec: {},

  loadSpec(spec) {
    this.spec = spec
  }
})
