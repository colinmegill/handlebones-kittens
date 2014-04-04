define([
  'backbone',
  'views/root',
  'views/hello-world/index',
  'collections/articles',
  'views/articles-view'
], function(Backbone, RootView, IndexView, ArticlesCollection, ArticlesView) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "nyt": "nyt",
      "loan": "loan"
    },
    index: function() {
      var view = new IndexView();
      RootView.getInstance().setView(view);
    },
    nyt: function() {
      var articles = new ArticlesCollection();
      articles.fetch({
        success: function(){
          var articlesView = new ArticlesView({
            collection: articles
          })
          console.log(articlesView.collection)
          RootView.getInstance().setView(articlesView);
        }
      })
    },
    loan: function() {
      
    }
  });
});