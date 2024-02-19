import { module, test } from 'qunit';

import { setupTest } from 'ember-quickstart/tests/helpers';

module('Unit | Adapter | alumnos', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:alumnos');
    assert.ok(adapter);
  });
});
