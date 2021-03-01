import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {
  // baseURL defined on nuxt level
  baseURL() {
    return 'https://api.le-systeme-solaire.net/rest/'
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
