import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		searchGitHub(query) {
			var promise;
			Ember.run(this, function(){
				promise = Ember.$.getJSON('https://api.github.com/search/repositories?q=' + query);
				this.set('promise', promise);
			});
			return promise;
		}
	}
});
