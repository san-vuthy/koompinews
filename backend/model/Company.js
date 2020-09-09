const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  globalCompanySize: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  des: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Company', CompanySchema);
