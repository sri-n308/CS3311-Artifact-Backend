const express = require('express');
const mongoose = require('mongoose');
const Post = require('./Post');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
  // GET: Get all posts
  app.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  // POST: Create a new post
  app.post('/posts/create', async (req, res) => {
    try {
      const newPost = new Post(req.body);
      await newPost.save();
      res.status(201).send(newPost);
    } catch (error) {
      res.status(500).send(error);
    }
  });
 
mongoose.connect('mongodb+srv://artifact:Password@3311.2hfgpv8.mongodb.net/3311?retryWrites=true&w=majority&appName=3311', {
  })
  .then(() => {
    console.log('MongoDB connected');
    // Start the server only after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
//'mongodb+srv://gtmarketplaceteam:YellowJackets404@gtwebdev.om3r7hf.mongodb.net/MarketplaceDB?retryWrites=true&w=majority'