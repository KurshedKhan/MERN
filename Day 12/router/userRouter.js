const express = require("express");
const userRouter = express.Router();
const path = require("path");


userRouter.get("/",(req,res,next)=>{
  console.log("This is my first middleware",req.url,req.method);
  res.sendFile(path.join(__dirname,"../","views","home.html"));
})

module.exports = userRouter;