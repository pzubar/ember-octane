import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  /**
   * @type {AuthService}
   */
  @inject auth;

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
    const { target } = evt;
    const { value } = target.querySelector('select');

    evt.preventDefault();
    if (value) {
      this.auth.loginWithCurrentUserId(value);
    }
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
