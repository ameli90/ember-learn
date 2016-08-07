import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('post', 1);
  }
});
