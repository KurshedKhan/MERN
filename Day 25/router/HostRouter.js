const express = require("express");
const hostRouter = express.Router();
const path = require('path');
const basedir = require('../utilities/util');
const home = require("../controller/HostController")

hostRouter.get("/host/addItem",home.editHome)

hostRouter.post("/host/addItem/",home.homeadded)

hostRouter.get("/host/host-home-list",home.hostHomeList)

hostRouter.get("/host/editHome/:homeId",home.edithomeItem)

hostRouter.post("/host/editHome",home.postEditHome)

hostRouter.post("/host/deleteHome/:homeId",home.deletehomeItem)


module.exports = hostRouter;