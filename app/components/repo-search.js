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

			Ember.run(this, function(){
				searchAction(searchValue).then((searchResults) => {
					hideSpinner();
					if (searchResults.items.length === 0) {
						this.set('results', []);
						displayEmptyMessage();
					} else {
						hideEmptyMessage();
						Ember.run(this, function(){
							this.set('results', searchResults.items);
						});
					}
				}, () => {
					hideSpinner();
					this.set('results', []);
					displayEmptyMessage();
				});
			});
		}
	}
});
