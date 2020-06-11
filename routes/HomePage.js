var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const animal=mongo.animals;
const animalinformation=require('../models/animal');

/* GET home page. */
router.get('/HomePage', function(req, res, next) {
    var username=req.session.user.userName;
    animalinformation.getAllanimals()
        .then(function (result){
            console.log(result);
            res.render('HomePage', {
                input:result,
                info: username
            });
        });


});

module.exports = router;


/*
router.get('/HomePage1', function(req, res, next) {
    animalinformation.getAllanimals()
        .then(function (result){
            //console.log(result);
            res.render('HomePage1', {
                input:result
            });
        });
});
//currentUserName: 'name'

/*
    var name= req.session.user.userName;
    console.log(req.session.user.userName);
    console.log('name');
    console.log(name);

 */