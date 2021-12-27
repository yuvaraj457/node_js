const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userDetails = new Schema({
    userName : {type : String, required : true},
    email : {type : String, required : true},
    place : {type : String, required : true},
    age : {type : Number, required : true},
    date: { type: Date, default: Date.now },
    courses : {type : Array}
})

const userDetailsModel = mongoose.model('userDetails', userDetails)
module.exports = userDetailsModel