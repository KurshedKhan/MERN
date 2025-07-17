const express = require("express");
const hostRouter = express.Router();
const path = require('path');
const basedir = require('../utilities/util');
const home = require("../controller/home")

hostRouter.get("/host/addItem",home.addhome)

hostRouter.post("/host/addItem",home.homeadded)

exports.hostRouter = hostRouter;
