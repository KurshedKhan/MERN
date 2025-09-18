// External Module
const express = require("express");
const session = require("express-session");
const app = express();
const path = require('path');
const MongodbStore = require('connect-mongodb-session')(session);


// local module
const StoreRouter = require("./router/StoreRouter");
const authRouter = require("./router/authRouter");
const hostRouter = require("./router/HostRouter");
const basedir = require('./utilities/util');

const errors = require('./controller/error');
const { default: mongoose } = require("mongoose");

app.set("view engine","ejs");
app.set("views","views");

const db_path = "mongodb+srv://root:kurshed123123@cluster0.6qtehgg.mongodb.net/electronicDB?retryWrites=true&w=majority&appName=Cluster0";

const store = MongodbStore(
  {
    uri : db_path,
    collection : 'session'
  }
)
app.use(session({
  secret : "Complete coding by yashveer sir",
  resave : false,
  saveUninitialized : true,
  store
}))


app.use((req,res,next)=>{
  req.isLoggedIn = req.session.isLoggedIn;
  next();
})

app.use(express.static(path.join(basedir,"public")))

app.use(express.urlencoded({ extended: false }));


app.use(authRouter);
app.use(StoreRouter);
app.use('/host',(req,res,next)=>{
  if(req.isLoggedIn){
    next();
  }
  else{
    res.redirect("/login")
  }
})
app.use(hostRouter);

app.set('views', path.join(__dirname, 'views'));

app.use(errors.error);

const PORT = 3000;


mongoose.connect(db_path).then(()=>{
  console.log("Connected to Mongo");
 app.listen(PORT,()=>{
  console.log(`my server is starting : http://localhost:${PORT}`);
})
})
.catch((err)=>{
  console.log("Error while connecting to Mongo",err)
})