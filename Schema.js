const mongoose = require('mongoose');
const validator = require('validator');

var userSchema = new mongoose.Schema({
    name :{ type : 'string', required  : true},
    age :{ type : 'number', min:[18,"Only adults are allowed"] , required : true},
    email :{ type : 'string',required : true , lowercase : true  ,validate:(value)=>{
        return validator.isEmail(value)}},
    mobile :{ type : 'string', default : "000-000-0000",required : true },
    createdAt : { type : 'date', default : Date.now()}
})

var foodSchema = new mongoose.Schema({
    foodItem : { type : 'string', required : true},
    price : { type : Number, required : true},
    description : { type : String, default : "different varieties of masala"}
})

const userDetails = mongoose.model('users',userSchema);
const foodDetails = mongoose.model('foods',foodSchema);
module.exports = {userDetails,foodDetails};