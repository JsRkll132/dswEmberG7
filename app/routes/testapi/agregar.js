import Route from '@ember/routing/route';
import { action } from '@ember/object';
import fetch from 'fetch';
export default class TestapiAgregarRoute extends Route {
    formAlum = {
        idAlumno: '',
        correoInst: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        grupo: '',
        numMatAnt: '',
        numTelef: ''
      };
    @action
    async saveAlumno(event) {
      event.preventDefault();
      const alumnoData = {
        idAlumno: formAlum.get('idAlumno'),
        correoInst: formAlum.get('correoInst'),
        nombres: formAlum.get('nombres'),
        apellidoPaterno: formAlum.get('apellidoPaterno'),
        apellidoMaterno: formAlum.get('apellidoMaterno'),
        grupo: formAlum.get('grupo'),
        rol: false,
        numMatAnt: formAlum.get('numMatAnt'),
        numTelef: formAlum.get('numTelef'),
      };
      this.controllerFor('alumnos').saveAlumno(alumnoData);
    }
}
