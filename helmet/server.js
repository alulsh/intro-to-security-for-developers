var express = require('express');
var http = require('http');
var fs = require('fs');
var express = require('express');
var helmet = require('helmet');
var app = express();

// var options = {
//     key: fs.readFileSync('privatekey.pem'),
//     cert: fs.readFileSync('cert.pem')
// }

http.createServer(app).listen(3000, function(err){
    if (err) throw err;
    console.log('Server started on port 3000');
});

app.use(helmet())

app.use('/', express.static('static'));