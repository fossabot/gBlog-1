var xhr = new XMLHttpRequest();
var articles = new Array();

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        articles = response.split("\n");
        if (articles.length != 0) {
	        var cList = $('div.articles_div_div')
			$.each(articles, function(i)
			{
				if (i != 0 && i == 1)
				{	
				    var div = $("<div/>")
				    	.load("/articles/" + articles[i])
				    	.appendTo($("body"));
				}
			});
		}
		else {
		}
    }
}
$().ready(function() {
	xhr.open('GET', "/get_articles", true);
	xhr.send();
	xhr.onreadystatechange = processRequest;
});