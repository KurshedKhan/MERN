const express = require("express");
const hostRouter = express.Router();
const path = require('path');
const basedir = require('../utilities/util');
const home = require("../controller/HostController")

hostRouter.get("/host/addItem",home.addhome)

hostRouter.post("/host/addItem",home.homeadded)

hostRouter.get("/host/host-home-list",home.hostHomeList)

module.exports = hostRouter;