// temporary database
const MyHome = require("../models/data");

exports.addhome = (req,res,next)=>{
  res.render('addHome');
}

exports.homeadded = (req,res,next)=>{
  const {itemname,ItemPrice,ItemImages,ItemDescription} = req.body;
  const homeObj = new MyHome(itemname,ItemPrice,ItemImages,ItemDescription);
  homeObj.save();
  res.render("homeAdded");
}

exports.main = (req,res,next)=>{
  MyHome.fetchAll((eleItems)=>{
    res.render('home',{items:eleItems});
  });
}