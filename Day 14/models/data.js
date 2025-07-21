const file = require("fs");
const path = require("path");
const baseDir = require("../utilities/util");

module.exports = class MyHome {
  constructor(itemname, ItemPrice, ItemImages, ItemDescription) {
    this.itemname = itemname;
    this.ItemPrice = ItemPrice;
    this.ItemImages = ItemImages;
    this.ItemDescription = ItemDescription;
  }
  save() {
    MyHome.fetchAll((eleItems) => {
      eleItems.push(this);
      const pathDir = path.join(baseDir, "database", "database.json");
      file.writeFile(pathDir, JSON.stringify(eleItems), (error) => {
        console.log("File successfully run", error);
      });
    });
  }

  static fetchAll(callback) {
    const pathDir = path.join(baseDir, "database", "database.json");
    file.readFile(pathDir, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }
};
