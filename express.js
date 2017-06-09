var path = require('path');
var express = require('express');
var handle = require('express-handlebars');
var letterNumber = require('./letterNumber');
var final = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

final.engine('handlebars', handle({defaultLayout: 'main'}));
final.set('view engine', 'handlebars');
final.use(express.static(path.join(__dirname, 'public'))); /*statically retrieves style.css and index.js*/
final.use(express.static(path.join(__dirname, '/views/images'))); /*statically retrieves all images from /views/images*/
final.use(bodyParser.json());

final.get('/', function(request, response, next){
	response.render('page', {
		letters: letterNumber,
		letter: "Alphabets",
		alphabet: "Alphabets",
	});
});

final.get('/index.html', function(request, response, next){
	response.render('page', {
		letters: letterNumber, 
		letter: "Alphabets",
		alphabet: "Alphabets"
	});
});

final.get('/letters/:index', function(request, response, next){
	var index = request.params.index;
	var alpha = index;
	switch(index){
		case 'a': case 'A': index = 0; break;
		case 'b': case 'B': index = 1; break;
		case 'c': case 'C': index = 2; break;
		case 'd': case 'D': index = 3; break;
		case 'e': case 'E': index = 4; break;
		case 'f': case 'F': index = 5; break;
		case 'g': case 'G': index = 6; break;
		case 'h': case 'H': index = 7; break;
		case 'i': case 'I': index = 8; break;
		case 'j': case 'J': index = 9; break;
		case 'k': case 'K': index = 10; break;
		case 'l': case 'L': index = 11; break;
		case 'm': case 'M': index = 12; break;
		case 'n': case 'N': index = 13; break;
		case 'o': case 'O': index = 14; break;
		case 'p': case 'P': index = 15; break;
		case 'q': case 'Q': index = 16; break;
		case 'r': case 'R': index = 17; break;
		case 's': case 'S': index = 18; break;
		case 't': case 'T': index = 19; break;
		case 'u': case 'U': index = 20; break;
		case 'v': case 'V': index = 21; break;
		case 'w': case 'W': index = 22; break;
		case 'x': case 'X': index = 23; break;
		case 'y': case 'Y': index = 24; break;
		case 'z': case 'Z': index = 25; break;
	}

	if(alpha == 'A' || alpha == 'a'){
		response.render('A', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'B' || alpha == 'b'){
		response.render('B', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'C' || alpha == 'c'){
		response.render('C', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'D' || alpha == 'd'){
		response.render('D', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'E' || alpha == 'e'){
		response.render('E', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'F' || alpha == 'f'){
		response.render('F', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'G' || alpha == 'g'){
		response.render('G', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'H' || alpha == 'h'){
		response.render('H', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'I' || alpha == 'i'){
		response.render('I', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'J' || alpha == 'j'){
		response.render('J', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'K' || alpha == 'k'){
		response.render('K', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'L' || alpha == 'l'){
		response.render('L', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'M' || alpha == 'm'){
		response.render('M', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'N' || alpha == 'n'){
		response.render('N', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'O' || alpha == 'o'){
		response.render('O', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'P' || alpha == 'p'){
		response.render('P', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'Q' || alpha == 'q'){
		response.render('Q', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'R' || alpha == 'r'){
		response.render('R', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'S' || alpha == 's'){
		response.render('S', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'T' || alpha == 't'){
		response.render('T', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'U' || alpha == 'u'){
		response.render('U', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'V' || alpha == 'v'){
		response.render('V', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'W' || alpha == 'w'){
		response.render('W', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'X' || alpha == 'x'){
		response.render('X', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'Y' || alpha == 'y'){
		response.render('Y', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else if(alpha == 'Z' || alpha == 'z'){
		response.render('Z', {
			alphabet: alpha.toUpperCase(),
			letter: alpha.toUpperCase()
		});
	}

	else{
		next();
	}

});

final.get('*', function(request, response, next){
	response.render('404LUL', {
		alphabet: "404",
		letter: "Does Not Exist"
	});
});

final.get('/letters/*', function(request, response, next){
	response.render('404LUL', {
		alphabet: "404",
		letter: "Does Not Exist"
	});
})

final.listen(port, function(){
	console.log("Starting up final project");
});