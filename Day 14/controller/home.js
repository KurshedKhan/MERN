const eleItems = [];

exports.addhome = (req,res,next)=>{
  console.log("This is my seond middleware",req.url,req.method);
  res.render('addHome');
}

exports.homeadded = (req,res,next)=>{
  eleItems.push(req.body);
  console.log("My post regarding middleware",req.url,req.method,req.body);
  res.render("homeAdded");
}

exports.eleItems = eleItems;