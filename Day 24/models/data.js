const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
  productName : {
    type : String,
    require : true
  },
  price :{
    type : Number,
    require : true
  },
  images : {
    type : String,
    require : true
  },
  description :{
    type : String,
    require : true
  }
});

module.exports = mongoose.model('MyHome',homeSchema);
