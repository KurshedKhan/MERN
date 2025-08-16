// temporary database
const MyHome = require("../models/data");

exports.editHome = (req,res,next)=>{
  res.render('host/editHome',{editable : false});
}

exports.edithomeItem = (req,res,next)=>{
  const homeId = req.params.homeId;
  const editable = req.query.editable === "true";

  MyHome.findById(homeId,home=>{
    if(!home){
      console.log("Home not found");
      return res.redirect("/host/host-home-list")
    }
    res.render('host/editHome',{editable : editable,home:home});
  })

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