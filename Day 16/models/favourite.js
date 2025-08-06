const file = require("fs");
const path = require("path");
const baseDir = require("../utilities/util");

module.exports = class Favourite {

    favouriteSave() {
      Favourite.favouriteFetchAll((favourite) => {
        favourite.push(this);
        const pathDir = path.join(baseDir, "database", "favourite.json");
        file.writeFile(pathDir, JSON.stringify(favourite), (error) => {
          console.log("File successfully run", error);
        });
      });
    }

  static favouriteFetchAll(callback) {
    const pathDir = path.join(baseDir, "database", "favourite.json");
    file.readFile(pathDir, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }
};
