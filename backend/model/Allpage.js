const mongoose = require('mongoose');

const AllpageSchema = new mongoose.Schema({
  namePage: {
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
module.exports = mongoose.model('Allpage', AllpageSchema);
