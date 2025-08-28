// database 
const db = require('../utilities/sqlconnectionUtil');
module.exports = class MyHome {
  constructor(homeId,productName,price,images,description) {
    this.homeId = homeId;
    this.productName = productName;
    this.price = price;
    this.images = images;
    this.description = description;
  }

  save() {
    if(this.homeId){
       return db.execute("UPDATE homes SET productName=?,price=?,images=?,description=? WHERE homeId=?",[this.productName,this.price,this.images,this.description,this.homeId]);
    }
    else{
       return db.execute("INSERT INTO homes(homeId,productName,price,images,description) VALUES (?,?,?,?,?)",[this.homeId,this.productName,this.price,this.images,this.description]);
    }
  }

  static fetchAll(callback) {
    return db.execute('SELECT * FROM homes');
  }

  static findById(homeId){
   return db.execute('SELECT * FROM homes WHERE homeId=?',[homeId]);
  }

  static DeleteById(homeId){
   return db.execute('DELETE FROM homes WHERE homeId=?',[homeId]);
  }
};
