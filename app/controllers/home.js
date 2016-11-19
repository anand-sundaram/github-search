import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		searchGitHub(query) {
			return new Promise(function(resolve, reject){
				let repos = Ember.$.getJSON('https://api.github.com/search/repositories?q=' + query).then(function(response){
					console.log(response);
					return response.items;
				});

			    resolve(repos);

			});
		}
	}
});
