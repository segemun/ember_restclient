import ApplicationAdapter from './application';
import _string from 'lodash/string';

export default ApplicationAdapter.extend({
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return _string.replace(this._super(...arguments), '/users', '/me');
    }

    return this._super(...arguments);
  }
});