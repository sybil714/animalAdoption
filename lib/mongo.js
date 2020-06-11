const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'animalAdoptionDB',
});

const animalSchema = new Schema({
    species: {type:String},
    breeds: {type:String},
    gender:{type:String},
    color:{type:String},
    location: {type:String},
    birth:{type:String},
    photo:{type:String},
    comment:{type:Array}
});

const animals = mongoose.model('animals', animalSchema, 'animals');


const userSchema = new Schema({
    userName: {type:String},
    email: {type:String},
    passWord:{type:String},
    phoneNumber:{type:String},
});

const users = mongoose.model('User', userSchema, 'User');

const adoptSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    firstName: {type:String},
    SecondName: {type:String},
    phoneNumber:{type:String},
    Email:{type:String},
    postCode:{type:String},
    animalNumber:{type:String},
});

const adopts = mongoose.model('Adopt', adoptSchema, 'Adopt');

const commentSchema = new Schema({
    userID:{type: Schema.Types.ObjectId, ref: 'User'},
    animalID:{type: Schema.Types.ObjectId, ref: 'animals'},
    comments:{type:String},
});

const comments = mongoose.model('Comments', commentSchema, 'Comments');


module.exports={
    animals,
    users,
    adopts,
    comments,
};
