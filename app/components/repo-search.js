import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		searchForRepos(){
			let searchValue = this.get('value');
			let searchAction = this.get('search');

			searchAction(searchValue).then((searchResults) => this.set('results', searchResults));
		}
	}
});
