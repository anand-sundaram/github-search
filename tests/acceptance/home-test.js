import { test } from 'qunit';
import moduleForAcceptance from 'github-search/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('visiting /random-path', function(assert) {
  visit('/random-path');

  andThen(function() {
    assert.equal(currentURL(), '/random-path');
  });
});

test('should search for repos', function (assert) {
  visit('/home');
  fillIn('.prompt', 'object version recon');
  keyEvent('.prompt', 'keyup', 13);
  andThen(function () {
    assert.equal(find('.card').length, 3, 'should show 3 repos');
    assert.equal(find('.results h3:contains("object")').length, 3, 'should contain 3 repos with the word object');
  });
});


test('should display message if search is empty', function (assert) {
  visit('/home');
  fillIn('.prompt', '');
  keyEvent('.prompt', 'keyup', 13);
  andThen(function () {
    assert.equal(find('.card').length, 0, 'should show no repos');
    assert.equal(find('.empty').is(':visible'), true, 'should display message');
  });
});


test('should display message if search does not return any repos', function (assert) {
  visit('/home');
  fillIn('.prompt', 'gibberishwibberish');
  keyEvent('.prompt', 'keyup', 13);
  andThen(function () {
    assert.equal(find('.card').length, 0, 'should show no repos');
    assert.equal(find('.empty').is(':visible'), true, 'should display message');
  });
});