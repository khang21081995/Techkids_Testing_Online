var http = require("http");
var express = require("express");
var bodyParser = require('body-parser')

/******************************** Mongo DB ***************************/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/techkids');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function() {
  console.log('DB connection success! ');
});

/******************************** Express App ************************/
var app = express();
app.use(express.static(__dirname + "/client"));
app.use( bodyParser.json() );

require('./routes')(app);



http.createServer(app).listen(8888);
