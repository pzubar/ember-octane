import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {
  async beforeModel(transition) {
    await super.beforeModel(transition);
    const team = this.modelFor('teams.team')

    if (team?.channels?.length) {
      this.replaceWith('teams.team.channel', team.id, team.channels[0].id)
    }
  }
}
