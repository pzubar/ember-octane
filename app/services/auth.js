import Service, { inject } from '@ember/service';
import { action } from '@ember/object';
import Router from '@ember/routing/router';

const AUTH_KEY = 'shlack-user-id';


class AuthService extends Service {
  /**
   * @type {Router}
   */
  @inject router;

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  /**
   * @param {string} userId
   */
  loginWithCurrentUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams')
  }

  @action
  logout() {
    window.localStorage.removeItem(AUTH_KEY);
    this.router.transitionTo('login')
  }
}

export default AuthService
