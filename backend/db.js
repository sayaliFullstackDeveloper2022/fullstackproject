const mongoose = require("mongoose");
const { Login } = require("./models/User");
const uri = "mongodb://localhost:27017/customer_portal"
// const uri = "mongodb+srv://fullstack:fullstack27216@cluster0.6zsgb4o.mongodb.net/customer_portal?retryWrites=true&w=majority"

const connectToMongo = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true }, (error, result) => {
        if (error) console.log(error)
        else {
            console.log("Connected")
            // const a=Login.find();
            // console.log(":::::::::::",a.);
            // const cust=  mongoose.connection.db.collection("customers")
            // const login=  mongoose.connection.db.collection("login")
            // const final_cust=cust.find().toArray((error,result)=>{
            //     if(error) console.log(error);
            //     else console.log(result);
            // });
            // const final_login=login.findOne({uname:"admin"}).toArray((error,result)=>{
                // const final_login= login.findOne({uname:"admin"}).then(r=>
                
        }
    })
}
module.exports = connectToMongo;