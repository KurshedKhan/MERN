const express = require("express");
const hostRouter = express.Router();
const path = require('path');


hostRouter.get("/host/addItem",(req,res,next)=>{
  console.log("This is my seond middleware",req.url,req.method);
  res.sendFile(path.join(__dirname,"../","views","addHome.html"));
})


hostRouter.post("/host/addItem",(req,res,next)=>{
  console.log("My post regarding middleware",req.url,req.method,req.body);
  res.sendFile(path.join(__dirname,"../","views","homeAdded.html"));
})

module.exports = hostRouter;