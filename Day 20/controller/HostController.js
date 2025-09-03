// temporary database
const MyHome = require("../models/data");

exports.editHome = (req,res,next)=>{
  res.render('host/editHome',{editable : false});
}

exports.edithomeItem = (req,res,next)=>{
  const homeId = req.params.homeId;
  const editable = req.query.editable === "true";

  MyHome.findById(homeId).then(home=>{
    if(!home){
      console.log("Home not found");
      return res.redirect("/host/host-home-list")
    }
    res.render('host/editHome',{editable : editable,home:home});
  })

}

exports.homeadded = (req,res,next)=>{
  const {homeId,productName,price,images,description} = req.body;
  const homeObj = new MyHome(homeId,productName,price,images,description);
  homeObj.save().then(()=>{
    console.log("home added successfully");
  });
  res.redirect("/host/host-home-list");
}

exports.postEditHome = (req,res,next)=>{
  const {homeId,productName,price,images,description} = req.body;
  const homeObj = new MyHome(homeId,productName,price,images,description);
  homeObj.save().then((result)=>{
    console.log("Home saved successfully.",result)
  });
  res.redirect("/host/host-home-list");
}

exports.deletehomeItem = (req,res,next)=>{
  const homeId = req.params.homeId;
  MyHome.DeleteById(homeId)
  .then(()=>{
    res.redirect("/host/host-home-list");
  })
  .catch(error =>{
      console.log("delete item error",error)
  })
}

exports.hostHomeList = (req,res,next)=>{
  MyHome.fetchAll()
  .then(eleItems=>{
    res.render('host/host-home-list',{items:eleItems});
  });
}