import Service, { inject } from '@ember/service';
import Router from '@ember/routing/router';

const AUTH_KEY = 'shlack-user-id';

export default class AuthService extends Service {
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
}
