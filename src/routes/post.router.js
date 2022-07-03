const { Router } = require('express');
const PostService = require('../services/post.service.js');

const router = Router();

const service = new PostService;

// get posts
router.get('/',
  // midlewares
  async (req, res, next) => {
    try {
      const rta = await service.getPosts();

      res.send(rta)

    } catch (error) {
      next(error)
    }
  });

// create post
router.post('/',
  // midlewares
  async (req, res, next) => {
    try {
      const body = req.body;
      const image = req.files;

      const rta = await service.createPost(body, image)
      res.send(rta)
    } catch (error) {
      next(error);
    }
  });

// get one post
router.get('/:postId',
  // midlewares
  async (req, res, next) => {
    try {
      const { postId } = req.params;

      const rta = await service.getPostById(postId);

      res.send(rta)
    } catch (error) {
      next(error);
    }
  });

// edit post
router.put('/:postId',
  // midlewares
  async (req, res, next) => {
    try {
      const { postId } = req.params;
      const body = req.body;

      const rta = await service.editPost(postId, body);

      res.send(rta)
    } catch (error) {
      next(error);
    }
  });

// delete post
router.delete('/:postId',
  // midlewares
  async (req, res, next) => {
    try {
      const { postId } = req.params;

      await service.deletePost(postId);

      res.sendStatus(204)
    } catch (error) {
      next(error);
    }
  });

module.exports = router;