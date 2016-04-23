import Model from 'ember-data/model';

import DS from 'ember-data';

export default Model.extend({
	title: DS.attr(),
	owner: DS.attr(),
	city: DS.attr(),
	type: DS.attr(),
	image: DS.attr(),
	bedrooms: DS.attr()
});
