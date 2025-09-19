exports.getLogin = (req,res,next)=>{
  res.render("auth/login",{isLoggedIn: false});
}


exports.getSignUp = (req,res,next)=>{
  res.render("auth/signUp",{isLoggedIn: false});
}


exports.postLogin = (req,res,next)=>{
  console.log(req.body);
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn",true);
  // req.isLoggedIn = true;
  res.redirect("/");
}


exports.postSignUp = (req,res,next)=>{
  console.log(req.body);
  // req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn",true);
  // req.isLoggedIn = true;
  res.redirect("/");
}

exports.postLogout = (req,res,next) =>{
  req.session.destroy(()=>{
    res.redirect("/");
  })
}