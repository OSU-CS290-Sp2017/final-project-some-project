var path = require('path');
var express = require('express');
var handle = require('express-handlebars');
var final = express();
var letterNumber = require('./letterNumber');
var port = process.env.PORT || 3000;

final.engine('handlebars', handle({defaultLayout: 'main'}));
final.set('view engine', 'handlebars');
final.use(express.static(path.join(__dirname, 'public')));

final.get('/', function(req, res, next){
	res.render('page', {
		letters: letterNumber,
		single: false
	});
});

final.get('/letters/:index', function(req, res, next){
	var index = req.params.index;
	switch(index){
		case 'a': case 'A':
			index = 0; break;
		case 'b':case 'B':
			index = 1; break;
		case 'c':case 'C':	
			index = 2; break;
		case 'd':case 'D':
			index = 3; break;
		case 'e':case 'E':
			index = 4;  break;
		case 'f':case 'F':
			index = 5; break;
		case 'g':case 'G':
			index = 6; break;
		case 'h':case 'H':
			index = 7; break;
		case 'i':case 'I':
			index = 8; break;
		case 'j':case 'J':
			index = 9; break;
		case 'k':case 'K':
			index = 10; break;
		case 'l':case 'L':
			index = 11; break;
		case 'm':case 'M':
			index = 12; break;
		case 'n':case 'N':
			index = 13; break;
		case 'o':case 'O':
			index = 14; break;
		case 'p':case 'P':
			index = 15; break;
		case 'q':case 'Q':
			index = 16; break;
		case 'r':case 'R':
			index = 17; break;
		case 's':case 'S':
			index = 18; break;
		case 't':case 'T':
			index = 19; break;
		case 'u':case 'U':
			index = 20; break;
		case 'v':case 'V':
			index = 21; break;
		case 'w':case 'W':
			index = 22; break;
		case 'x':case 'X':
			index = 23; break;
		case 'y':case 'Y':
			index = 24; break;
		case 'z':case 'Z':
			index = 25; break;
	}
	var specificLetter = letterNumber[index];
	if(specificLetter){
		res.render('page', {
			alpha: specificLetter.letter,
			description: specificLetter.description,
			single: true
		});
		console.log(specificLetter.letter + " " + specificLetter.description);
	}
	else{
		next();
	}
});

final.get('*', function(req, res, next){
	res.render('404LUL');
});

final.get('/letters/*', function(req, res, next){
	res.render('404LUL');
})

final.listen(port, function(){
	console.log("Starting up final project");
});