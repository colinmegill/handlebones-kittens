define([
  'view',
  'hbs!templates/loan-view'
], function (View, template) {
  return View.extend({
    name: 'loan-view',
    template: template
  });
});
