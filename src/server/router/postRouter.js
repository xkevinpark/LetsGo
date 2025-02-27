const express = require('express');
const router = express.Router();

// Controllers
const postController = require('../controllers/postController');

// Make a POST request to create post:
router.post('/create', postController.addPost, (req, res) => {
  res.status(200).send(res.locals.post);
});
// Make a GET request to get all posts:
router.get('/all', postController.getPosts, (req, res) => {
  res.status(200).send(res.locals.posts);
});
// Make a POST request to create like:
router.post('/like', postController.likePost, (req, res) => {
  res.status(200).send(res.locals.likes);
});
// Make a POST request to create like:
router.delete('/unlike', postController.unlikePost, (req, res) => {
  res.status(200).send(res.locals.likes);
});
// Make a GET request to get one post:

// Make a GET request to get all posts:
router.delete('/delete', postController.deletePost, (req, res) => {
  res.status(200).send(res.locals.deletePost);
});

module.exports = router;