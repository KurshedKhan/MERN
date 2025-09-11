// External Module
const express = require("express");
const app = express();
const path = require('path');


// local module
const StoreRouter = require("./router/StoreRouter");
const authRouter = require("./router/authRouter");
const hostRouter = require("./router/HostRouter");
const basedir = require('./utilities/util');

const errors = require('./controller/error');
const { default: mongoose } = require("mongoose");

app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(basedir,"public")))

app.use(express.urlencoded({ extended: false }));
app.use(StoreRouter);
app.use(authRouter);
app.use(hostRouter);

app.set('views', path.join(__dirname, 'views'));

app.use(errors.error);

const PORT = 3000;
const db_path = "mongodb+srv://root:kurshed123123@cluster0.6qtehgg.mongodb.net/electronicDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(db_path).then(()=>{
  console.log("Connected to Mongo");
 app.listen(PORT,()=>{
  console.log(`my server is starting : http://localhost:${PORT}`);
})
})
.catch((err)=>{
  console.log("Error while connecting to Mongo",err)
})