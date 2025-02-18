const mogoose = require('mongoose');

const EventSchema = new mogoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  des: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: String,
    required: true,
  },
});
module.exports = mogoose.model('Event', EventSchema);
