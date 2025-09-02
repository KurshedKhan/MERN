const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = "mongodb+srv://root:kurshed123123@cluster0.6qtehgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;

const mongoConnect = (callback) =>{
MongoClient.connect(url)
.then((client)=>{
  callback();
  _db = client.db('electronicDB')
})
.catch((error)=>{
  console.log("Error while connectiong to Mongo",error)
})
}

const getDB = ()=>{

  if(!_db){
    throw new Error("Mongo not connected")
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;