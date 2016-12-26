import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('waitForApiResponse', function(app, time) {
   Ember.run.later(function(){
   }, time || 500);
   return wait();
});
