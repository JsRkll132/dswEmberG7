import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class TestapiController extends Controller {
  @service router;
  @action
  goToAgregar() {
    this.router.transitionTo('testapi.agregar');
  }
}
