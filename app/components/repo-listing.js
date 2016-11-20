import Ember from 'ember';

export default Ember.Component.extend({
	toggleVisibility: false,
	actions: {
	    toggleDetail() {
			this.toggleProperty('toggleVisibility');
	    }
	}
});
