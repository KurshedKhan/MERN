// External Module
const express = require("express");
const app = express();
const path = require('path');

// local module
const userRouter = require("./router/userRouter");
const {hostRouter} = require("./router/HostRouter");
const basedir = require('./utilities/util');

app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(basedir,"public")))

app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
app.use(hostRouter);

app.set('views', path.join(__dirname, 'views'));

app.use((req,res,next)=>{
  console.log("Page not found");
  res.status(404).sendFile(path.join(basedir,"views","404.html"));
})

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`my server is starting : http://localhost:${PORT}`);
})