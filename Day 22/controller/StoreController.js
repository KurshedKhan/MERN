// temporary database
const MyHome = require("../models/data");
const Favourite = require("../models/favourite");

exports.main = (req,res,next)=>{
  MyHome.find()
  .then(eleItems=>{
    res.render('store/home',{items:eleItems,isLoggedIn : req.isLoggedIn});
    console.log(eleItems)
  })
}

exports.bookings = (req,res,next)=>{
    res.render('store/bookings',{isLoggedIn : req.isLoggedIn});
}

exports.favourite = (req,res,next)=>{
    Favourite.find()
    .populate('homeId')
    .then(favourites => {
      favouriteHomes = favourites.map(fav => fav.homeId)
      res.render('store/favourite',{favouriteHomes:favouriteHomes,isLoggedIn : req.isLoggedIn})
    })
}

exports.postFavourite = (req,res,next)=>{
    const homeId = req.body.homeId;
    Favourite.findOne({homeId:homeId})
    .then((fav)=>{
      if(fav){
        console.log("Already marked as a favourite");
      }else{
        fav = new Favourite({homeId:homeId})
        fav.save().then((result)=>{
          console.log("Fav added successfully",result);
        });
      }
      res.redirect('/store/favourite')
    }).catch((error)=>{
      console.log("Error while marking favourite",error)
    })
}

exports.homeDetails = (req,res,next)=>{
     MyHome.find()
     .then(eleItems=>{
    res.render('store/home-details',{items:eleItems,isLoggedIn : req.isLoggedIn});
  });
}
exports.homeDetail = (req,res,next)=>{
    const homeId = req.params.homeId;
    MyHome.findById(homeId).then(home=>{
      if(!home){
        console.log("Home not found");
        res.redirect("store/home")
      }
      else{
        res.render("store/home-details",{home:home,isLoggedIn : req.isLoggedIn})
      }
    });
}
exports.homeList = (req,res,next)=>{
    MyHome.find()
    .then(eleItems =>{
    res.render('store/home-list',{items:eleItems,isLoggedIn : req.isLoggedIn});
  });
}
exports.reserve = (req,res,next)=>{
    res.render('store/reserve',{isLoggedIn : req.isLoggedIn});
}

exports.FavouriteRemove = (req,res,next)=>{
  const favouriteId = req.params.favouriteId;
  Favourite.findOneAndDelete(favouriteId)
  .then((result)=>{
    console.log("Favourite Remove : ",result)
  })
  .catch((error)=>{
    console.log("delete favourite item error",error)
  })
  .finally(()=>{
    res.redirect("/store/home-list");
  })
}