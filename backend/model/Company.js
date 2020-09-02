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
  globalCompany: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
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
  revenue: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Company', CompanySchema);
