const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName : {
    type : String,
    required : [true,"First name is required"]
  },
  lastName : {
    type : String,
    required : [true,"Last name is required"]
  },
  email : {
    type : String,
    required : [true,"email is required"],
    unique : true
  },
  password : {
    type : String,
    required : [true,"password is required"],
  },
  userType : {
    type : String,
    enum : ['Guest',"Host"],
    default : 'Guest'
  },
  favourites : [{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'MyHome'
  }]
});

module.exports = mongoose.model('User',userSchema);
