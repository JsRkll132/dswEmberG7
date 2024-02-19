import { module, test } from 'qunit';

import { setupTest } from 'ember-quickstart/tests/helpers';

module('Unit | Adapter | alumno', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:alumno');
    assert.ok(adapter);
  });
});
