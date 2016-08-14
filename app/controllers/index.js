import Ember from 'ember';

export default Ember.Controller.extend({
    filteredList: null,
    actions: {
        filterByCity(param) {
            if (param !== '') {
                return this.get('store').query('rental', {city: param});
            } else {
                return this.get('store').findAll('rental');
            }
        },
        autoComplete(param) {
            if (param !== '') {
                this.store.query('rental', { city: param }).then((result) => {
                    this.set('filteredList', result);
                });
            } else {
                this.set('filteredList', null);
            }
        },
        search(param) {
            if (param !== '') {
                this.store.query('rental', { city: param }).then((result) => {
                    this.set('model', result);
                });
            } else {
                this.store.findAll('rental').then((result) => {
                    this.set('model', result);
                });
            }
        }
    }
});
