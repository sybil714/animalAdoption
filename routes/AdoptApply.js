var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const Applay = require('../controllers/Applay');

router.get('/Thanks', function(req, res, next) {
    // var username=req.session.user.userName;
    res.render('Thanks', { });
});

router.get('/AdoptApply', function(req, res, next) {
    var username=req.session.user.userName;
    res.render('AdoptApply', {info: username });
});

router.post('/AdoptApply', function(req, res, next) {

    Applay.create(req,res);

});

module.exports = router;
