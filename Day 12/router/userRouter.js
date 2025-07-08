const express = require("express");
const userRouter = express.Router();
const path = require("path");
const basedir = require("../utilities/util");


userRouter.get("/",(req,res,next)=>{
  console.log("This is my first middleware",req.url,req.method);
  res.sendFile(path.join(basedir,"views","home.html"));
})

module.exports = userRouter;