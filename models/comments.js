const mongo = require('../lib/mongo');
const comment = mongo.comments;

module.exports = {

    getAllcomments: function getAllcomments() {
        return comment
            .find()
            .exec();
    },


}