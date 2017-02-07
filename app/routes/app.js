import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
    inject: { service }
} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    currentUser: service(),
    beforeModel(){
       return this.get('currentUser').load();
    }
});
