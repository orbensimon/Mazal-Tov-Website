var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Schema = mongoose.Schema;
var guest = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    giftAmount: Number,
    _eventId: {type: ObjectId, ref:'Event'}
});
module.exports = mongoose.model('Guest', guest);