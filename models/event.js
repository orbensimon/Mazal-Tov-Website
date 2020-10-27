var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
var event = new Schema({
    title: { type: String, default: "Event" },
});

module.exports = mongoose.model('Event', event);