import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),
  beforeModel(){
    this._super(...arguments);
    return this.get('currentUser').load();
  }
});
