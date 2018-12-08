var xhr = new XMLHttpRequest();
var articles = new Array();

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        console.log(response);
        articles = response.split("\n");
        if (articles.length != 0) {
	        var cList = $('ul.articles_ul')
			$.each(articles, function(i)
			{
				if (i != 0)
				{	
				    var li = $('<li/>')
				        .appendTo(cList);
				    var div = $("<div/>")
				    	.addClass("articles_div")
				    	.appendTo(li);
				    var a = $('<a/>')
				        .text(articles[i].replace(/-/g, " ").replace(/.htm/g, ""))
				        .attr("href", "articles/" + articles[i])
				        .appendTo(div);
				}
			});
		}
		else {
			console.log("THERE ARE NO ARTICLES!");
		}
    }
}
$().ready(function() {
	xhr.open('GET', "/get_articles", true);
	xhr.send();
	xhr.onreadystatechange = processRequest;
});