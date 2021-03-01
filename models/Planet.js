import Model from './Model'

export default class Planet extends Model {
  // Set the resource route of the model
  resource() {
    return 'bodies'
  }
}
