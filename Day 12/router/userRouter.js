const express = require("express");
const userRouter = express.Router();


userRouter.get("/",(req,res,next)=>{
  console.log("This is my first middleware",req.url,req.method);
  res.send(`
    Tech Innovation (Home Page)<br>
    <a href="/host/addItem">Go to Add Item</a>
    `);
})

module.exports = userRouter;