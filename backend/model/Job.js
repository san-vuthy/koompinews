const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  jobCategId: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  worktime: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  requireSkill: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('job', JobSchema);
