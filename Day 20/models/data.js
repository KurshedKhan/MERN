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
  }

  static fetchAll(callback) {

  }

  static findById(homeId){
   
  }

  static DeleteById(homeId){
  
  }
};
