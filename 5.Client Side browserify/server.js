require('marko/node-require').install();

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/',require('./src/pages/home'));

app.listen('8080',function(){
	console.log('listening on port 8080');
});