import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'idAlumno',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { alumnos: payload };
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
