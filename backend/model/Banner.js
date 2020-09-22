const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
  banner: {
    type: String,
  },
  page: {
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

module.exports = mongoose.model('Banner', BannerSchema);
