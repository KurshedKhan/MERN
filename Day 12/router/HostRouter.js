const express = require("express");
const hostRouter = express.Router();


hostRouter.get("/host/addItem",(req,res,next)=>{
  console.log("This is my seond middleware",req.url,req.method);
  res.send(`
    Add your item details
    <form action="/host/addItem" method="POST">
    <input type="text" name="itemname" placeholder="Enter your item">
    <input type="email" name="email" placeholder="Enter your email">
    <input type="name" name="name" placeholder="Enter your name">
    <input type="submit" value="submit">
    </form>
    `);
})


hostRouter.post("/host/addItem",(req,res,next)=>{
  console.log("My post regarding middleware",req.url,req.method,req.body);
  res.send(`
    <h1>My item is added successfully.</h1>
    <a href="/">Go to Home</a>
    `);
})

module.exports = hostRouter;