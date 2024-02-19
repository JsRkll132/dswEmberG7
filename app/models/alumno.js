import Model, { attr } from '@ember-data/model';

export default class AlumnoModel extends Model {
  @attr('string') idAlumno;
  @attr('string') idDocente;
  @attr('string') apellidoPaterno;
  @attr('string') apellidoMaterno;
  @attr('string') nombres;
  @attr('string') correoInst;
  @attr('number') numTelef;
  @attr('boolean') rol;
  @attr('number') grupo;
  @attr('number') numMatAnt;
}
