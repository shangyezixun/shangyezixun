module.exports = function () {
    var mongoose = require('mongoose');
    var url = 'mongodb://localhost:27017/myproject';
    mongoose.connect(url);
}