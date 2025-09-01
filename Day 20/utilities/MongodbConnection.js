const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = "mongodb+srv://root:kurshed@123123@cluster0.6qtehgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoConnect = (callback) =>{
MongoClient.connect(url)
.then((client)=>{
  callback(client);
})
.catch((error)=>{
  console.log("Error while connectiong to Mongo",error)
})
}

module.exports = mongoConnect;