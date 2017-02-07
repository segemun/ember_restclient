import Ember from 'ember';
import {
  validator, buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  password: validator('presence', true)
});

const{
  inject: { service },
  get, set
} = Ember;

export default Ember.Component.extend(Validations, {
  session: service(),
  routing: service('-routing'),
  username: null,
  password: null,

  actions:{
    submit(){
      const {username, password} = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password).catch((response) => {
        let error = response.error_description || 'Something Went Wrong';
        set(this, 'error', error);
      });
    }
  }
});