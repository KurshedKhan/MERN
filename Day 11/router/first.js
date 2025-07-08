const express = require("express");
const firstRouter = express.Router();
const path = require('path');
const basedir = require("../utilities/util")

firstRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(basedir, "views", "main.html"))
});

module.exports = firstRouter;