const mongo = require('../lib/mongo');
const animal = mongo.animals;

module.exports = {

    getAllanimals: function getAllanimals() {
        return animal
            .find()
            .exec();
    },
    getanimalbytag:function getanimalbytag(color,location,gender,species){
        /*return animal
            .find({
                color:color
            })
            .exec();*/
        //console.log(color);
        //console.log(color!='null');
        if(color!='null'){
            var colorcontant = color
        }else {
            var colorcontant={$ne:null}
        }
        if(location!='null'){
            var locationcontant = location
        }else {
            var locationcontant={$ne:null}
        }
        if(gender!='null'){
            var gendercontant = gender
        }else {
            var gendercontant={$ne:null}
        }
        if(species!='null'){
            var speciescontant = species
        }else {
            var speciescontant={$ne:null}
        }


        return animal
            .find({

                color:colorcontant,
                location:locationcontant,
                gender:gendercontant,
                species:speciescontant
            })
            .exec();


    },
    getanimalbyid: function getanimalbyid(id) {
        return animal
            .findById(id)
            .exec();
    }

    

}