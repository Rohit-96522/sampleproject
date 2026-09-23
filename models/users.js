let mongoose=require('mongoose');

let userSchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true   
    },
    password:{
        type:String,
        required:true,
        minlenght:[8,"password must be of length of 8 characters"]
    },
    role:{
        type:String,
        enum:["HR","EMPLOYEE"] 
    }
})
let users=mongoose.model('users',userSchema);
module.exports=(users);