const express = require("express");
const home = require("../controller/StoreController")
const StoreRouter = express.Router();

StoreRouter.get("/",home.main);
StoreRouter.get("/store/bookings",home.bookings);
StoreRouter.get("/store/favourite",home.favourite);
StoreRouter.get("/store/home-details",home.homeDetails);
StoreRouter.get("/store/home-list",home.homeList);
StoreRouter.get("/store/reserve",home.reserve);

module.exports = StoreRouter;