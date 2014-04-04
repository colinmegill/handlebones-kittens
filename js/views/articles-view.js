define([
  'view',
  'views/kittens',
  'hbs!templates/articles-view'
], function (View, Kittens, template) {
  return Handlebones.CollectionView.extend({
    name: "todo-collection",
    tagName: "div",
    className: "row",
    modelView: Handlebones.ModelView.extend({
      name: "todo-collection-model",
      tagName: "div",
      className: "col-lg-4 col-xs-4 col-md-6",
      template: template
    }),
    initialize: function(options) {

      this.kittens = this.addChild(new Kittens());
      
    }
  });
});
