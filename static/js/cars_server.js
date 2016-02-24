var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://jack:grizzly@ds011228.mongolab.com:11228/memit');

var Car = mongoose.model('Car', {
  make: String,
  model: String
});

app.use(morgan('short'));
app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/cars', function(req, res) {
  Car
    .find()
    .then(function(result){
      res.send(result);
    });
});

app.post('/cars', function(req, res) {
  var car = new Car(req.body);
  car.save(function (err) {
    if (err)
      return res.send(err);
    return res.send(Car)
  });
});

app.delete('/cars/:id', function(req, res){
  Car
    .remove({_id: req.params.id})
    .then(function(){
      res.send({});
    });
});

app.patch('/cars/:id', function(req, res){
  Car
    .update({_id: req.params.id}, {$set: req.body})
    .then(function(result){
      res.send(result);
    })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App is ready at http://localhost:' + process.env.PORT);
});