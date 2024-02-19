import { module, test } from 'qunit';

import { setupTest } from 'ember-quickstart/tests/helpers';

module('Unit | Model | alumno', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('alumno', {});
    assert.ok(model);
  });
});
