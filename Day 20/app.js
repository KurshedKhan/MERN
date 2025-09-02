// External Module
const express = require("express");
const app = express();
const path = require('path');


// local module
const StoreRouter = require("./router/StoreRouter");
const hostRouter = require("./router/HostRouter");
const basedir = require('./utilities/util');

const errors = require('./controller/error');
const {mongoConnect} = require("./utilities/MongodbConnection");

app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(basedir,"public")))

app.use(express.urlencoded({ extended: false }));
app.use(StoreRouter);
app.use(hostRouter);

app.set('views', path.join(__dirname, 'views'));

app.use(errors.error);

const PORT = 3000;
mongoConnect(()=>{
  app.listen(PORT,()=>{
  console.log(`my server is starting : http://localhost:${PORT}`);
})
})