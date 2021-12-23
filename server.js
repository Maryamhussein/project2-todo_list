const express=require('express');
const app=express();
app.use(express.json())

const db = require("./db");
const user = require("./model/todo");
app.get('/',(req,res)=>{
    res.json("Get work")
})
app.listen(5000,(req,res) => {
    console.log("Server Running")
})
