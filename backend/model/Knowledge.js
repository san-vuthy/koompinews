const mongoose = require('mongoose');

const KnowledgeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  faqavatar: {
    type: String,
    // required: true,
  },
  klbavatar: {
    type: String,
    // required: true,
  },
  sfavatar: {
    type: String,
    // required: true,
  },
  maintitle: {
    type: String,
    required: true,
  },
  faq: {
    type: String,
    required: true,
  },
  klb: {
    type: String,
    required: true,
  },
  sf: {
    type: String,
    required: true,
  },
  lastbase: {
    type: String,
    // required: true,
  },
  recentbase: {
    type: String,
    // required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model('Knowledge', KnowledgeSchema);
