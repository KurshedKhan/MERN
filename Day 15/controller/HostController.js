// temporary database
const MyHome = require("../models/data");

exports.addhome = (req,res,next)=>{
  res.render('host/addHome');
}

exports.homeadded = (req,res,next)=>{
  const {itemname,ItemPrice,ItemImages,ItemDescription} = req.body;
  const homeObj = new MyHome(itemname,ItemPrice,ItemImages,ItemDescription);
  homeObj.save();
  res.render("host/homeAdded");
}
exports.hostHomeList = (req,res,next)=>{
  MyHome.fetchAll((eleItems)=>{
    res.render('host/host-home-list',{items:eleItems});
  });
}