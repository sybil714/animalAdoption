var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const users = mongo.users;

/* GET home page. */
router.get('/Registration', function(req, res, next) {
    res.render('Registration', { warring:'', info:'' });
});

router.post('/Registration',function(req, res,next) {

    var data= {
        userName: req.body. userName,
        email : req.body.email,
        passWord : req.body.passWord,
        phoneNumber: req.body.phoneNumber,
    };

    var Name = data.userName;
    var mail = data.email;
    var pass = data.passWord;
    var phone = data.phoneNumber;

    if (!Name||!mail||!pass||!phone){
        res.render('Registration', {warring:"* Please complete the form",info:'' });
    }

    else {
        var user = new users(data)
        user.save(function (err, res) {
            console.log(data)
        })
        res.render ('Registration', {warring:'', info:'* Your registration is succeed, you can try to login now'});
    }
});

module.exports = router;
