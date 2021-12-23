const mongoose=require('mongoose');
const mongooseURI='mongodb://localhost:27017/tododb';
const db=mongoose.connection;
mongoose.connect(mongooseURI, () => {
    console.log("Connection Established")
});
db.on("error",(err)=>{
console.log("Connection error")
});
db.on("connected",()=>{
    console.log("Connection Successfully")
});