var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');


/*var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '../views/images/')));*/



var access = http.createServer(function(request, response){
    var file = "public/" + request.url; /*this gets the url itself, like index.html*/
    var extension = path.extname(file); /*this gets the file type, whether it be .html, .css, etc.*/
    var content = 'text/html';  
    switch(extension){
        case '.css':
            content = 'text/css';
            break;
        case '.js':
            content = 'text/javascript';
            break;
    }
    if(request.url == "/" || request.url == "/index.html"){
        fs.readFile('public/index.html', function(err, dat){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(dat);
        });
    }
    else{
        fs.readFile(file, function(error, data){
            if(error){
                if(error.code == 'ENOENT'){
                    fs.readFile('public/404LUL.html', function(errors, datas){
                        response.writeHead(404, {'Content-Type': 'text/html'});
                        response.end(datas);
                    });
                }
            }
            else{
                response.writeHead(200, {'Content-Type': content});
                response.end(data);
            }
        });
    }
});


access.listen(3000);