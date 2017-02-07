import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';
import ENV from 'client/config/environment';

export default OAuth2PasswordGrant.extend({
  refreshAccessTokens: true,
  serverTokenEndpoint: `${ENV.APP.host}/oauth/v2/token`,

  makeRequest(url, data) {
    data.client_id = ENV.APP.client_id;
    data.client_secret = ENV.APP.client_secret;
    return this._super(url, data);
  },
  invalidate(){
    return this._super(...arguments);
  }
});