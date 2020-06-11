const express = require('express');
const router = express.Router();
const character = require('../controllers/characters');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        var original = file.originalname;
        var file_extension = original.split(".");
        // Make the file name the date + the file extension
        filename =  Date.now() + '.' + file_extension[file_extension.length-1];
        cb(null, filename);
    }
});
var upload = multer({ storage: storage });
/* GET home page. */
router.get('/AddAnimal', function(req, res, next) {
    var username=req.session.user.userName;
    res.render('AddAnimal', {info:username });
});

router.post('/AddAnimal' , upload.single('myImg'),function(req, res,next) {

    //console.log(req.file.path);
    character.create(req,res);
});

module.exports = router;
