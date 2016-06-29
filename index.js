var express = require('express');
var server = express();
var bodyParser= require('body-parser');

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root:__dirname})
});

server.post('/', function(request, response){
  response.json(request.body);
});

server.listen(port, function(){
  console.log('Now listening on port ...' + port)
});
