define(['collection', 'models/article'], function (Collection, articleModel) {
  return Collection.extend({
    name: 'articles',
    url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=california+drought&fq=source:(%22The%20New%20York%20Times%22)&page=1&api-key=f25c99da2f24daefca165f7a452d05ec:1:35029882",
    model: articleModel,
    parse: function(nyt) {
    	return nyt.response.docs;
  	}
  });
});
