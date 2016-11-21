import Ember from 'ember';

function showSpinner() {
	$('.dimmer').addClass('active');
}

function hideSpinner() {
	$('.dimmer').removeClass('active');
}

function displayEmptyMessage() {
	$('.empty').show();
}

function hideEmptyMessage() {
	$('.empty').hide();
}

export default Ember.Component.extend({
	actions: {
		searchForRepos(){
			let searchValue = this.get('value');
			let searchAction = this.get('search');

			showSpinner();

			searchAction(searchValue).then((searchResults) => {
				hideSpinner();
				if (searchResults.length == 0) {
					this.set('results', []);
					displayEmptyMessage();
				} else {
					hideEmptyMessage();
					this.set('results', searchResults);
				}
			}, (error) => {
				hideSpinner();
				this.set('results', []);
				displayEmptyMessage();
			});
		}
	}
});
