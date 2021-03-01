import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {
  // baseURL defined on nuxt level
  baseURL() {
    return 'ss'
  }

  request(config) {
    return this.$http.request(config)
  }

  parameterNames() {
    return {
      sort: 'order',
      fields: 'data',
    }
  }
}
