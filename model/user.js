var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    uid: String,
    name: String,
    value: String,
    createTime: {
        type: Date,
        default: Date.now
    }
});

exports.User = mongoose.model('user', user, 'user');