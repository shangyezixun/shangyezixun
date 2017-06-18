var model = require('../model/user');
var User = model.User;

module.exports = {
    index: function*(){
        var self = this;
        User.find(function(err, docs) {
            console.log(this);
            self.render('index', {
                title: 'Express+MongoDb示例',
                demos: docs
            });
        });
    }
}