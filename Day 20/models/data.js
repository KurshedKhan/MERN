const { ObjectId } = require("mongodb");
const { getDB } = require("../utilities/MongodbConnection");

// database 
module.exports = class MyHome {
  constructor(_id,productName,price,images,description) {
    if(_id){
      this._id = _id;
    }
    this.productName = productName;
    this.price = price;
    this.images = images;
    this.description = description;
  }

  save() {
    const db = getDB();
    if(this._id){
      const updateField = {
        productName : this.productName,
        price : this.price,
        images : this.images,
        description : this.description
      };
       return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))},{$set:updateField});
    }else{
      return db.collection('homes').insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('homes').find().toArray();

  }

  static findById(homeId){
    const db = getDB();
    return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next();
  }

  static DeleteById(homeId){
  const db = getDB();
    return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))});
  }
};
