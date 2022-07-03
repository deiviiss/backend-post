const { Router } = require('express');
// routes
const postsRouter = require('./post.router.js');

function routerApi(app) {
  const router = Router();

  app.use('/api/v1', router);

  router.use('/posts', postsRouter);
};

module.exports = routerApi;
