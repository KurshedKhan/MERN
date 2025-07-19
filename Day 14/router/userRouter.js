const express = require("express");
const home = require("../controller/homes")

const userRouter = express.Router();

userRouter.get("/",home.main);

module.exports = userRouter;