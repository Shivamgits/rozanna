const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://shivamsingh:shivam@cluster0.kzavt.mongodb.net/merntodo?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose
    .connect(mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true },)
    .then(() => console.log(`Connected to mongoDB`))
    .catch((e) => console.log(e));
   
}

module.exports = connectToMongo;