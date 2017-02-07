import Ember from 'ember';

export default DS.RESTSerializer.extend({
    keyForAttribute: function(attr) {
        return Ember.String.decamelize(attr);
    }
});
