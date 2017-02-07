import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('public', { path: '/' }, function() {
    this.route('login', { path: '/' });
  });
  
  this.route('app', function() {
    this.route('dashboard');
  });
  
  this.route('error-404', { path: '*path' });
});

export default Router;
