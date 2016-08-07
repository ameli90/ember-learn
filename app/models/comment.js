import Model from 'ember-data/model';

import DS from 'ember-data';

export default Model.extend({
  name: DS.attr(),
  parent: DS.belongsTo( 'comment' ),
  comments: DS.hasMany( 'comment', { inverse: 'parent' } )
});