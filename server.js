var path = require('path');
var express = require('express');
var handle = require('express-handlebars');
var final = express();
var letterNum = require('./letterNumber');
var port = process.env.PORT || 3000;

final.engine('handlebars', handle({defaultLayout: 'main'}));
final.set('view engine', 'handlebars');
final.use(express.static(path.join(__dirname, 'public')));





final.listen(port, function(){
	console.log("Starting up final project");
});