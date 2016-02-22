var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://user:password@ds011228.mongolab.com:11228/memit');

var user = mongoose.model('user', {
  email: String,
  password: String
});

app.use(morgan('short'));
app.use(express.static('static'));
app.use(bodyParser.json());
//keeps the data after reload
app.get('/user', function(req, res) {
  user
   .find()
   .then(function(result) {
  res.send(result);
   });
});

app.post('/api/users', function(req, res) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err)
      return res.send(err);
    return res.send(user)
  });
});

app.delete('/users/:id', function(req, res) {
  user
    .remove({_id: req.params.id})
    .then(function() {
      res.send({});
    });
});

app.patch('/users/:id', function(req, res) {
  user
  .update({_id: req.params.id}, {$set: req.body})
  .then(function(result) {
    res.send(result);
 });
});

app.listen(process.env.PORT || 4000, function () {
  console.log('App is ready at http://localhost:' + process.env.PORT);
});