exports.error = (req,res,next)=>{
  console.log("Page not found");
  res.status(404).render('404');
}