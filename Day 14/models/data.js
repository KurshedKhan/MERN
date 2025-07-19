const eleItems = [];
const file = require("fs");
const path = require("path");
const baseDir = require("../utilities/util")

module.exports = class MyHome {
  constructor(itemname,ItemPrice,ItemImages,ItemDescription){
    this.itemname = itemname;
    this.ItemPrice = ItemPrice;
    this.ItemImages = ItemImages;
    this.ItemDescription = ItemDescription;
  }

  save(){
    eleItems.push(this);
    const pathDir = path.join(baseDir,"database","database.json")
    file.writeFile(pathDir,JSON.stringify(eleItems),(error)=>{
      console.log("File successfully run",error);
    })
  }
 
  static fetchAll(){
    return eleItems;
  }
}