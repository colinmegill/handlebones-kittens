define([
  'view',
  'hbs!templates/kittens'
], function (View, template) {
  return Handlebones.View.extend({
    name: 'kittens',
    template: template,
    events: {
    	"click h1": "logPromise"
    },
    logPromise: function() {
    	console.log('you clicked the headline on the childview')
    }
  });
});
