// temporary database
const MyHome = require("../models/data");

exports.main = (req,res,next)=>{
  MyHome.fetchAll((eleItems)=>{
    res.render('store/home',{items:eleItems});
  });
}

exports.bookings = (req,res,next)=>{
    res.render('store/bookings');
}

exports.favourite = (req,res,next)=>{
    res.render('store/favourite');
}
exports.homeDetails = (req,res,next)=>{
    res.render('store/home-details');
}
exports.homeDetail = (req,res,next)=>{
    const homeId = req.params.homeId;
    MyHome.findById(homeId,(home)=>{
        res.render("store/home-details",{home:home})
    });
}
exports.homeList = (req,res,next)=>{
    MyHome.fetchAll((eleItems)=>{
    res.render('store/home-list',{items:eleItems});
  });
}
exports.reserve = (req,res,next)=>{
    res.render('store/reserve');
}