// temporary database
const MyHome = require("../models/data");
const User = require("../models/user");
exports.main = (req, res, next) => {
  console.log("session value : ", req.session);
  MyHome.find().then((eleItems) => {
    res.render("store/home", {
      items: eleItems,
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
    console.log(eleItems);
  });
};

exports.bookings = (req, res, next) => {
  res.render("store/bookings", {
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.favourite = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("favourites");
  res.render("store/favourite", {
    favouriteHomes: user.favourites,
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.postFavourite = async (req, res, next) => {
  const homeId = req.params.favouriteId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);

  if(!user.favourites.includes(homeId)){
    user.favourites.push(homeId)
    await user.save();
  }
  res.redirect("/store/favourite");
};

exports.homeDetails = (req, res, next) => {
  MyHome.find().then((eleItems) => {
    res.render("store/home-details", {
      items: eleItems,
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.homeDetail = (req, res, next) => {
  const homeId = req.params.homeId;
  MyHome.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("store/home");
    } else {
      res.render("store/home-details", {
        home: home,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    }
  });
};
exports.homeList = (req, res, next) => {
  MyHome.find().then((eleItems) => {
    res.render("store/home-list", {
      items: eleItems,
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.reserve = (req, res, next) => {
  res.render("store/reserve", {
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.FavouriteRemove = async (req, res, next) => {
  const homeId = req.params.favouriteId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);

  if(user.favourites.includes(homeId)){
    user.favourites = user.favourites.filter(fav => fav != homeId)
    await user.save();
  }
  res.redirect("/store/favourite");
};
