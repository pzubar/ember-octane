import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;


  get isDisabled() {
    return !this.userId;
  }

  handleSignIn(value) {
    console.log(value);
  }

  /**
   * Handle the form submit event
   * @param {Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const { target } = evt;
    const { value } = target.querySelector('select');
    if (value) this.handleSignIn(value);
  }

  /**
   * Handle the form submit event
   * @param {Event & { target: HTMLSelectElement }} evt
   */
  @action
  onSelectChanged(evt) {
    const { target } = evt;

    this.userId = target.value;
  }
}
