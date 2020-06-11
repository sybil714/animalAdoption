var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const users = mongo.users;
const userModel = require('../models/user');
const animalinformation=require('../models/animal');

/* GET home page. */
router.get('/Login', function(req, res, next) {
    res.render('Login', {warring:'' })
});

router.post('/Login',function(req, res,next) {

 var data= {
        email : req.body.email,
        passWord : req.body.passWord,
    };


    var emailInput = data.email;
    var passWordInput =data.passWord;

    //console.log(emailInput)
    //console.log(passWordInput)

    userModel.getUsersByEmail(emailInput)
        .then(function (result) {
            //console.log(result)
            // console.log(result.passWord)

            if (!result) {
                return res.render('Login', {warring:'Invalid email address,please try again' })

            } else if (passWordInput === result.passWord) {
                req.session.user = result;
                //console.log(result);
                //console.log(req.session.user);
                animalinformation.getAllanimals()
                    .then(function (result){
                        //console.log(result);
                        res.render('HomePage', {
                            input:result,
                            info: result.userName
                        });
                    });

            } else {
                return res.render('Login', {warring:'Sorry, please try again'})
            }
            /*    var user = new users(data)
                user.save(function (err, res) {
                    console.log(data)
                })
            */
        })

});

module.exports = router;
