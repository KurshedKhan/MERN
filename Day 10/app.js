// external module
const express = require("express");
const myApp = express();

myApp.get("/",(req,res,next)=>{
  console.log("my first middleware app",req.url,req.method);
  res.send("<p>My first middleware.</p>");
  next();
})

myApp.get("/submit-details",(req,res,next)=>{
  console.log("my second middleware app",req.url,req.method);
  res.send("<p>My second middleware.</p>");
});

// myApp.use((req,res,next)=>{
//   console.log("my third middleware app",req.url,req.method);
// })

const PORT = 3000;
myApp.listen(PORT,()=>{
  console.log(`My server is here : http://localhost:${PORT}`);
})