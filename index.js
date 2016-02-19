var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://user:password@ds047095.mongolab.com:47095/kingsburg_gus');

var user = mongoose.model('user', {
  email: String,
  password: String
});

app.use(morgan('short'));
app.use(express.static(_dirname + '/static'));
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

app.listen(process.env.PORT || 3000, function () {
  console.log('App is ready at http://localhost:' + process.env.PORT);
});