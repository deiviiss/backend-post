const { upLoadImage, deleteImage } = require('../libs/cloudinary');
const { models } = require('../libs/sequelize')
const fs = require('fs-extra');

class PostService {
  // get posts
  async getPosts() {
    const data = await models.Post.findAll()

    return data
  };

  // create posts
  async createPost(body, img) {
    let image;
    let post;

    if (img) {
      const result = await upLoadImage(img.image.tempFilePath)

      await fs.remove(img.image.tempFilePath)

      image = {
        url: result.secure_url,
        public_id: result.public_id
      }
    }

    post = {
      post: body.post,
      description: body.description,
      image
    }

    const newPost = await models.Post.create(post);

    return newPost;
  };

  // get one post
  async getPostById(postId) {

    const post = await models.Post.findByPk(postId);

    if (!post) {
      // error handler
      return { message: "No encontrado" };;
    }

    return post;
  };

  // edit posts
  async editPost(postId, changes) {
    const post = await this.getPostById(postId);

    await post.update(changes)

    return post;
  };

  // delete posts
  async deletePost(postId) {
    const post = await this.getPostById(postId);

    // delete image Cloudinary
    if (Object.keys(post.image).length != 0) {
      await deleteImage(post.image.public_id)
    }
    // delete post bbdd
    await post.destroy();

    return { message: "Post borrado" }
  };

};

module.exports = PostService;