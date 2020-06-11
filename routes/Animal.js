var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const comments= mongo.comments
animal=mongo.animals
const commentinformation=require('../models/animal');

router.get('/Animal/:id', function(req, res, next) {
    console.log(req.params.id);
    commentinformation.getanimalbyid(req.params.id)
        .then(function (result){
            console.log(result);
            res.render('Animal', {
                input:result
            });
        })

});
router.get('/Animal', function(req, res, next) {
    //console.log(req.params.id);
    commentinformation.getAllanimals()
        .then(function (result){
            let commentList=[];
            commentList=result[0];
            res.render('Animal', {
                commentList:commentList,
            });
        });
});

router.post('/Animal/:id', function(req, res, next) {

    /*var data={
        //userID:req.session.user.userName,
        comments:req.body.comments,
    }

    //console.log(req.params.id);
    commentinformation.getanimalbyid(req.params.id)
        .then()
    var comment = new comments(data);
    comment.save(function (err, res) {
        console.log(data)
    })*/
    //res.render('Animal', { });
    commentinformation.getanimalbyid(req.params.id)
        .then(function (result){
            console.log(result);
            animal.updateOne({_id:req.params.id},{ $push: {comment:req.body.comments}},function (err){
                if(err){
                }
                console.log('success');
                commentinformation.getanimalbyid(req.params.id)
                    .then(function (result){
                        console.log(result);
                        res.render('Animal', {
                            input:result,
                        });
                    })
            })
            //console.log(result);
        });

});

module.exports = router;
