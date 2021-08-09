import Service, { inject } from '@ember/service';
import { action } from '@ember/object';
import Router from '@ember/routing/router';

export default class MockAuthService extends Service {
  currentUserId = null

  /**
   * @type {Router}
   */
  @inject router;

  /**
   * @param {string} userId
   */
  loginWithCurrentUserId(userId) {
    this.currentUserId = userId
    this.router.transitionTo('teams')
  }

  @action
  logout() {
    this.currentUserId = null;
    this.router.transitionTo('login')
  }
}

