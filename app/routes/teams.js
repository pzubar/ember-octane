import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

/**
 * @typedef {import('shlack/services/auth').default} AuthService
 */

export default class TeamsRoute extends Route {
  /**
   * @type {AuthService}
   */
  @service auth;

  async beforeModel(transition) {
    await super.beforeModel(transition);

    if (!this.auth.currentUserId) {
      this.transitionTo('login')
    }
  }
}
