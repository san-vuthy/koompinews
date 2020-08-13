const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  describtion: {
    type: String,
    required: true,
  },
  categoriesId: {
    type: String,
    required: true,
  },
  newsTypeId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('News', NewsSchema);
