import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Config from 'client/config/environment';

const {
  APP: { host }
} = Config;

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  host: host,
  
  pathForType: function(type) {
    return Ember.String.pluralize(type);
  }
});
