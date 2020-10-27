var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var user = new Schema({
	emailAddress: String,
	name: String,
	password: String,
	events: [{type:ObjectId,ref:'Event'}]
});
module.exports = mongoose.model('User',user);