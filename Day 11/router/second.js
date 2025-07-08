const express = require("express");
const secondRouter = express.Router();
const path = require('path');
const basedir = require("../utilities/util")

secondRouter.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(basedir, "views", "contact.html"))
});

secondRouter.post("/contact-us",(req,res,next)=>{
  console.log("Submitter]d response", req.body);
  res.sendFile(path.join(basedir, "views", "submitted.html"))
})

module.exports = secondRouter;