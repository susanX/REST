var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
//db
var mongoose = require('mongoose'); // DB control program
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ga-server-demo');
var asset = require('assert');//sf
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DATABASE CONNECTED!!!!!');
});
var cars = db.collection('cars'); //sf
//var cursor = cars.find({name: "Bentley"}.limit(1));
//console.log(cursor);

//db
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// You can start to work on your rest calls now here Creat Read Update and Delete
// Its currently hard hard but you should be able to query the database and do the
// same thing with the results
app.get('/cars', function(req, res){
    var cars = [{name: 'Mercedes1', bhp: 100}, {name: 'Bentley1', bhp:100}];
    return res.json(cars);
});
////-----




///
app.post('/cars', function(request, response){
    return res.json(req.body);
});

app.listen(3333, function(){
    console.log('Server is listening');
});
