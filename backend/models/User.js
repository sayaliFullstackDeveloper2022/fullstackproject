const mongoose = require("mongoose");
// const {Schema}=mongoose;

const customer_schema = new mongoose.Schema({
    // id:{type:Number},
    // - username: String,
    // name: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    // // email: String,
    // email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },

    name:{type:String,required:true},
    email:{type:String,required:true},
    contact: { type: String, required: true }
})

const login_schema = new mongoose.Schema({
    // id:{type:Number,required:true},
    // - username: String,
    // name: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    // // email: String,
    // email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },

    uname:{type:String,required:true},
    password:{type:String,required:true},
})
const Login=mongoose.model("login", login_schema,'login');
const Customer=mongoose.model("customers", customer_schema,'customers');
module.exports = {Login,Customer}