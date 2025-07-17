const express = require("express");
const hostRouter = express.Router();
const path = require('path');
const basedir = require('../utilities/util');


hostRouter.get("/host/addItem",(req,res,next)=>{
  console.log("This is my seond middleware",req.url,req.method);
  res.sendFile(path.join(basedir,"views","addHome.html"));
})

const eleItems = [];

hostRouter.post("/host/addItem",(req,res,next)=>{
  eleItems.push(req.body);
  console.log("My post regarding middleware",req.url,req.method,req.body);
  res.sendFile(path.join(basedir,"views","homeAdded.html"));
})

exports.hostRouter = hostRouter;
exports.eleItems = eleItems;