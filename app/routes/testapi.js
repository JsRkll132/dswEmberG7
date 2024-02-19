import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class TestapiRoute extends Route {
  async model() {
    return this.controllerFor('alumnos').fetchAlumnos();
  }
  @action
  showAddForm() {
    this.transitionTo('testapi.agregar');
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    console.log(model);
  }
}
