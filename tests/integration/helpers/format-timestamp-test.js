import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '08-21-1997');

    await render(hbs`{{format-timestamp inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Aug 21, 1997 00:00.00 AM');
  });
});
