const mongoose = require('mongoose');
const favourite = require('./favourite')

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

homeSchema.pre('findOneAndDelete', async function(next){
  console.log("came to pre hook while deleting a home");
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({homeId : homeId});
  next();
});

module.exports = mongoose.model('MyHome',homeSchema);
