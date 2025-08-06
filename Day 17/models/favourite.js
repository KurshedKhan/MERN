const file = require("fs");
const path = require("path");
const baseDir = require("../utilities/util");

module.exports = class Favourite {

    static addToFavourite(homeId,callback) {
      Favourite.favouriteFetchAll((favourite) => {
       if(favourite.includes(homeId)){
        callback("Home is already marked favourite");
       }else{
         favourite.push(homeId);
          const pathDir = path.join(baseDir, "database", "favourite.json");
          file.writeFile(pathDir, JSON.stringify(favourite),callback);
       }
      });
    }

  static favouriteFetchAll(callback) {
    const pathDir = path.join(baseDir, "database", "favourite.json");
    file.readFile(pathDir, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }
};
