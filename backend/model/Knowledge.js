const mongoose = require('mongoose');

const KnowledgeSchema = new mongoose.Schema({
  banner: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  avarta: {
    type: String,
    required: true,
  },
  categKnowId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  lastbase: {
    type: String,
    required: true,
  },
  recentbase: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model('Knowledge', KnowledgeSchema);
