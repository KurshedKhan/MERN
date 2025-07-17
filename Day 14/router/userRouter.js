const express = require("express");
const userRouter = express.Router();
const path = require("path");
const basedir = require("../utilities/util");
const {eleItems} = require("../controller/home")

userRouter.get("/",(req,res,next)=>{
  console.log("This is my first middleware",req.url,req.method);
  res.render('home',{items:eleItems});
})

module.exports = userRouter;