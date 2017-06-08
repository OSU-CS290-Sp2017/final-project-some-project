var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 3000;
var static = require('node-static');
var lul = new static.Server('./public');

var access = http.createServer(function(request, response){
    var file = 'public/' + request.url; /*this gets the url itself, like index.html*/
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
    request.addListener('end', function(){
        lul.serve(request, response, function(err, dat){
            if(!err){
                lul.serveFile('/style.css', 200, {}, request, response);
            }
        });
    }).resume();

    if(request.url == '/'){
        fs.readFile('index.html', function(err, dat){
            if(!err){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(dat);
            }
        });
    }
    else if(request.url == '/index.html'){
        fs.readFile('./index.html', function(err, dat){
            if(!err){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(dat);
            }
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
                response.write(data);
                response.end();
            }
        });
    }
});

access.listen(port, function(){
    console.log("Starting up Final Project");
});