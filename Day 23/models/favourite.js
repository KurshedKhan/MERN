const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({
  homeId : {
    type : mongoose.Schema.Types.ObjectId,
    require : true,
    unique : true,
    ref : 'MyHome'
  }

});

module.exports = mongoose.model('Favourite',favouriteSchema);
