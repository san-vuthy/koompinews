const mongoose = require('mongoose');
const { kStringMaxLength } = require('buffer');

const CvSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  additional: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model('Cv', CvSchema);
