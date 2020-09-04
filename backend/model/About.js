const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
  },
  avarta: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model('About', AboutSchema);
