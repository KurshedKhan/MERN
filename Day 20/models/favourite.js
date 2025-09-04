const { ObjectId } = require("mongodb");
const { getDB } = require("../utilities/MongodbConnection");

module.exports = class Favourite {
    constructor(homeId){
      this.homeId = homeId;
    }

    addToFavourite() {
      const db = getDB();
      return db.collection('favourite').insertOne(this);
    }

  static favouriteFetchAll(callback) {
    const db = getDB();
    return db.collection('favourite').find().toArray();
  }

  static DeleteById(homeId,callback){
    
  }  
};
