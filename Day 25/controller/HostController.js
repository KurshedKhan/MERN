// temporary database
const MyHome = require("../models/data");

exports.editHome = (req, res, next) => {
  res.render("host/editHome", { editable: false, isLoggedIn: req.isLoggedIn,user : req.session.user });
};

exports.edithomeItem = (req, res, next) => {
  const homeId = req.params.homeId;
  const editable = req.query.editable === "true";

  MyHome.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/host/host-home-list");
    }
    res.render("host/editHome", {
      editable: editable,
      home: home,
      isLoggedIn: req.isLoggedIn,
      user : req.session.user
    });
  });
};

exports.homeadded = (req, res, next) => {
  const { homeId, productName, price, images, description } = req.body;
  console.log(homeId, productName, price, images, description);
  const homeObj = new MyHome({
    homeId,
    productName,
    price,
    images,
    description,
  });
  homeObj.save().then(() => {
    console.log("home added successfully");
  });
  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { homeId, productName, price, images, description } = req.body;
  MyHome.findById(homeId)
    .then((home) => {
      home.productName = productName;
      home.price = price;
      home.images = images;
      home.description = description;
      home
        .save()
        .then((result) => {
          console.log("Home saved successfully.", result);
        })
        .catch((err) => {
          console.log("Error while updating", err);
        });
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Home not found by id", error);
    });
};

exports.deletehomeItem = (req, res, next) => {
  const homeId = req.params.homeId;
  MyHome.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("delete item error", error);
    });
};

exports.hostHomeList = (req, res, next) => {
  MyHome.find().then((eleItems) => {
    res.render("host/host-home-list", {
      items: eleItems,
      isLoggedIn: req.isLoggedIn,
      user : req.session.user
    });
  });
};
