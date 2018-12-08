var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var htm_path = "/public/htm/"
var articles_path = "/public/htm/articles/"
var all_articles = "";

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile( __dirname + htm_path + "index.htm" );
})

app.get('/articles', function (req, res) {
	res.sendFile( __dirname + htm_path + "articles.htm" );
})

app.get('/about', function (req, res) {
	res.sendFile( __dirname + htm_path + "about.htm" );
})

app.get('/get_articles', function (req, res) {
	console.log("The server got a request for the articles!");
	fs.readdir( __dirname + articles_path, function (err, files) {
	    if (err) {
	        return console.log("The server is unable to scan the articles directory: " + err);
	        res.sendFile( __dirname + htm_path + "error.htm" );
	    } 
	    files.forEach(function (file) {
	    	all_articles += "\n" + file;
	    });
	  	console.log(all_articles);
	  	res.send(all_articles);
	});
	all_articles = "";
})

app.get('/articles/:articleName', function (req, res) {
	res.sendFile( __dirname + articles_path + req.params["articleName"].replace(/.htm/g, "") + ".htm" );
})

var server = app.listen(4567, "192.168.0.115" ,function () {
   	var host = server.address().address
   	var port = server.address().port
   	console.log("The server got started on: " + host + ":" + port);
})