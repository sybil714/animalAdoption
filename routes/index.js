var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const animalinformation=require('../models/animal');


/* GET home page. */
router.get('/', function(req, res, next) {
  animalinformation.getAllanimals()
      .then(function (result){
        console.log(result);
        res.render('index', {
          input:result
        });
      });

});
module.exports = router;