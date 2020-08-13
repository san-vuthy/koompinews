const mongoose = require('mongoose');
const validateEmail = function (email) {
  var isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return isEmail.test(email);
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, 'Please add an email'],
    unique: true,
    validate: [validateEmail, 'Please fill a valid email address'],
  },
  // role: {
  //   type: String,
  //   enum: ['user', 'admin'],
  //   default: 'user',
  // },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
    default: 'Public/uploads/g9418.png',
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('User', UserSchema);
