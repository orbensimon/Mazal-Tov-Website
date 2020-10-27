var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');
var Event = require('./models/event');
var Guest = require('./models/guest');


var db = mongoose.connect('mongodb://localhost/mazal-tov', { useNewUrlParser: true });
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function (req, res) {
    


});

app.post('/new-event', function (req, res) {
    var event = new Event({
        title: req.body.title
    });
    event.save(function (err, savedEvent) {
        if (err) {
            res.send("Cannot save new event");
        }
        else {
            res.send("Recored saved" + savedEvent);
        }

    });
});



app.listen(3000, function () {

    console.log("Server running on port 3000");

});