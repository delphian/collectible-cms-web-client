// Import packages.
var compression = require('compression');
var express     = require('express');
var app         = express();
var config      = require('./config/server-config');

// Configuration.
var port   = config.port;
var domain = config.domain;

// Compress (gzip) http responses.
app.use(compression());
app.use(express.static('dist'));

// Start the server
app.listen(port);
console.log('Client running on ' + domain + ':' + port);
