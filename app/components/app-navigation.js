import Ember from 'ember';

const {
    inject: { service },
    get
} = Ember;

export default Ember.Component.extend({
  session: service(),
  currentUser: service(),
  actions: {
    logout(){
      get(this, 'session').invalidate();
    }
  }
});
