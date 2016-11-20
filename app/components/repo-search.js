import Ember from 'ember';

function showSpinner() {
	$('.dimmer').addClass('active');
}

function hideSpinner() {
	$('.dimmer').removeClass('active');
}

export default Ember.Component.extend({
	actions: {
		searchForRepos(){
			let searchValue = this.get('value');
			let searchAction = this.get('search');

			showSpinner();

			searchAction(searchValue).then((searchResults) => {
				hideSpinner();
				this.set('results', searchResults);
			});
		}
	}
});
