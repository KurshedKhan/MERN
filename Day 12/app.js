// External Module
const express = require("express");
const app = express();

// local module
const userRouter = require("./router/userRouter");
const hostRouter = require("./router/HostRouter");

app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  console.log("Page not found");
  res.status(404).send(`This page is not found ${req.url} and 404 page`);
})

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`my server is starting : http://localhost:${PORT}`);
})