// database 
const db = require('../utilities/sqlconnectionUtil');
module.exports = class MyHome {
  constructor(itemname, ItemPrice, ItemImages, ItemDescription) {
    this.itemname = itemname;
    this.ItemPrice = ItemPrice;
    this.ItemImages = ItemImages;
    this.ItemDescription = ItemDescription;
  }
  save() {

  }

  static fetchAll(callback) {
    return db.execute('SELECT * FROM homes');
  }

  static findById(homeId,callback){
   
  }

  static DeleteById(homeId,callback){
   
  }
};
