var express = require('express');
var app = express();


app.use(express.static(__dirname + '/static'));

app.post('/api/users', function(req, res) {
    // Figure out how to insert into the database.
});


app.listen(process.env.PORT);