var express = require('express');

var app = express();
app.use(express.static('public'));

var mongojs = require('mongojs');
var databaseUrl = "nytreact";
var collections = ["articles"];
var db = mongojs(databaseUrl, collections);

db.on('error', function(err){
	console.log('Database error: ', err);
});

app.get('/', function(req, res){
	res.send(index.html);
})
