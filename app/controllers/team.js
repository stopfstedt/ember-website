import Controller from '@ember/controller';
import { sort } from '@ember/object/computed'
import { computed } from '@ember/object';

function inTeam(team) {
  return computed('sortedModel.[]', function() {
    return this.sortedModel
      .filter((member) => member.teams.includes(team))
  })
}

export default Controller.extend({
  sortingKeys: Object.freeze(['added']),
  sortedModel: sort('model', 'sortingKeys'),

  alumniTeamMembers: inTeam('alumni'),
  cliTeamMembers: inTeam('cli'),
  frameworkTeamMembers: inTeam('framework'),
  dataTeamMembers: inTeam('data'),
  learningTeamMembers: inTeam('learning'),
  steeringCommitteeMembers: inTeam('steering'),
});
