import Route from '@ember/routing/route';

export default class Alumnostest2Route extends Route {
  model() {
    return this.controllerFor('alumnos').fetchAlumnos();
  }
}
