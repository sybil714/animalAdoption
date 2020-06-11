const bodyParser = require("body-parser");
const req = require('request');
const mongo = require('../lib/mongo');
const animals=mongo.animals;
const path = require('path');


exports.create = function (req, res) {
    console.log(req.body);
    console.log(req.file.path,);
    var str=req.file.path;
    console.log(str.split('public/')[1])
    var comments=new Array();
    comments.push(req.body.tag);
    console.log(comments);
    var data = {
        species:req.body.species,
        breeds: req.body.breeds,
        gender:req.body.gender,
        color:req.body.color,
        location: req.body.location,
        birth: req.body.birth,
        photo:str.split('public/')[1],
        comment:comments
    }

    const animal = new animals(data);
    animal.save(function (err, results) {
        if (err)
        res.status(500).send('Invalid data!');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(animal));
        console.log(animal);
    });

};
