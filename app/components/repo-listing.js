import Ember from 'ember';

export default Ember.Component.extend({
	toggleVisibility: false,
	actions: {
	    toggleDetail() {
	      // this.set('isVisible', false);
	      this.toggleProperty('toggleVisibility');
	    }
	}
});
