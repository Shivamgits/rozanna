const mongoose = require('mongoose');
const {Schema,model} =mongoose;
const bcrypt = require("bcryptjs");



const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
     },
    password:{
        type: String,
        required: true
        
     },
    cpassword:{
        type: String,
        required: true
        
     },
    date:{
        type: Date,
        default: Date.now
    },
});
UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.cpassword,12)
    }

    next();
})

const User = model('USER',UserSchema);


module.exports = User;