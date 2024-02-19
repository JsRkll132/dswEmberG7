import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:2331',
  namespace: 'api/v1/alumnos',
  urlForFindRecord(id, modelName, snapshot) {
    return `${this.host}/${this.namespace}/list/${id}`;
  },
  urlForCreateRecord(modelName, snapshot) {
    return `${this.host}/${this.namespace}/save`;
  },
  urlForUpdateRecord(id, modelName, snapshot) {
    return `${this.host}/${this.namespace}/update`;
  },
  urlForDeleteRecord(id, modelName, snapshot) {
    return `${this.host}/${this.namespace}/delete/${id}`;
  },
});
