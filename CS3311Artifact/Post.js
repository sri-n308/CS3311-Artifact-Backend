const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
