var express = require('express');
var http = require('http');
var app = express();

http.createServer(app).listen(3000, function(err){
    if (err) throw err;
    console.log('Server started on port 3000');
});

app.use('/', express.static('http'));