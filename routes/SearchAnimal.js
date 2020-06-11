var express = require('express');
var router = express.Router();
const mongo = require('../lib/mongo');
const animal=mongo.animals;
const animalinformation=require('../models/animal');


/* GET home page. */
router.get('/SearchAnimal', function(req, res, next) {
   //var username=req.session.user.userName;
    animalinformation.getAllanimals()
        .then(function (result){
            //console.log(result);
            //console.log(result[0].photo);
            res.render('SearchAnimal', {
                input:result,
               // info: username
            });
        });
});

router.post('/SearchAnimal', function(req, res, next) {
    // var username=req.session.user.userName;
    //console.log(req.body);
    //console.log(req.body.color);
    //console.log(animalinformation.getAllanimals());
    //console.log(animalinformation.getanimalbytag(null,null,"female",null)._id)

    var co=false;
    var lo=false;
    var ge=false;
    var sp=false;
    var colorvalue,locationvalue,speciesvalue,gendervalue;
    try{
        //console.log(req.body.keyword!=null)
        if(req.body.keyword!=null){
            var cons=req.body.keyword.split("AND");
            console.log(cons.length);
            for(var i=0;i<cons.length;i++){
                key=cons[i].split("=")[0].trim();
                value=cons[i].split("=")[1].trim();
                console.log(key)
                console.log(value)
                console.log(key=='gender')
                if(key=='color'){
                    colorvalue=vaule.trim();
                    co=true;
                }else if(key=='location'){
                    locationvalue=value.trim();
                    lo=true;
                }else if(key=='gender'){
                    gendervalue=value.trim();

                    ge=true;
                }else if(key=='species'){
                    speciesvalue=value.trim();
                    sp=true;
                }
            }
        }
    }catch(err){

    }
    if(!co){
        colorvalue=req.body.color;
    }
    if(!lo){
        locationvalue= req.body.location;
    }
    if(!ge){
        gendervalue=req.body.gender;
    }
    if(!sp){
        speciesvalue=req.body.species;
    }
    console.log(gendervalue);
    animalinformation.getanimalbytag(colorvalue,locationvalue,gendervalue,speciesvalue)
        .then(function (result){
            //console.log(result);

            res.render('SearchAnimal', {
                input:result,

            });


        })


    //res.render('SearchAnimal', {  });
});


module.exports = router;
