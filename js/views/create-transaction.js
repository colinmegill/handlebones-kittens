define([
  'view',
  'hbs!templates/create-transaction'
], function (View, template) {
  return View.extend({
    name: 'create-transaction',
    template: template
  });
});
