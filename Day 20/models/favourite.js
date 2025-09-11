const { ObjectId } = require("mongodb");
const { getDB } = require("../utilities/MongodbConnection");

module.exports = class Favourite {
    constructor(homeId){
      this.homeId = homeId;
    }

    addToFavourite() {
      const db = getDB();
      return db.collection('favourite').findOne({homeId:this.homeId})
      .then((existingFav)=>{
        if(!existingFav){
          return db.collection('favourite').insertOne(this);
        }
        return Promise.resolve();
      })
    }

  static favouriteFetchAll() {
    const db = getDB();
    return db.collection('favourite').find().toArray();
  }

  static DeleteById(delHomeId){
      const db = getDB();
      return db.collection('favourite').deleteOne({homeId:delHomeId});
  }  
};
