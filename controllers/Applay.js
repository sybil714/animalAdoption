const bodyParser = require("body-parser");
const req = require('request');
const mongo = require('../lib/mongo');
const adopts = mongo.adopts;
const path = require('path');


exports.create = function (req, res) {
var data={
    //userId: req.session.user._id,
    firstName:req.body.firstName,
    secondName: req.body.secondName,
    phoneNumber:req.body.phoneNumber,
    Email:req.body.Email,
    postCode:req.body.postCode,
    animalNumber:req.body.animalNumber,
}

var adopt= new adopts(data)

adopt.save(function (err, res) {
    console.log(data)
    /*if (err)
        res.status(500).send('Invalid data!');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(adopts));
    console.log(adopts);*/
})
res.redirect('/Thanks')

};