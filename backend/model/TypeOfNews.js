const mongoose = require('mongoose');

const TypeOfNewsSchema = new mongoose.Schema({
  name: {
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
module.exports = mongoose.model('TypeOfNews', TypeOfNewsSchema);
