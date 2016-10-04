var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

var options = {
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('cert.pem')
}

https.createServer(options, app).listen(4000, function(err){
    if (err) throw err;
    console.log('Server started on port 4000');
});

app.use('/', express.static('https'));