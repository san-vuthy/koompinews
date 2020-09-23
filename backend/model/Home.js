const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  des: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    requred: true,
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

module.exports = mongoose.model('Home', HomeSchema);
