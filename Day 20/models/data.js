const { getDB } = require("../utilities/MongodbConnection");

// database 
module.exports = class MyHome {
  constructor(homeId,productName,price,images,description) {
    this.homeId = homeId;
    this.productName = productName;
    this.price = price;
    this.images = images;
    this.description = description;
  }

  save() {
    const db = getDB();
    return db.collection('homes').insertOne(this);
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('homes').find().toArray();

  }

  static findById(homeId){
   
  }

  static DeleteById(homeId){
  
  }
};
