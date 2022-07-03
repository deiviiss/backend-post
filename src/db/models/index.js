const { User, UserSchema } = require('./user.model');
const { Post, PostSchema } = require('./post.model')


function setupModels(sequelize) {

  //init models
  User.init(UserSchema, User.config(sequelize));
  Post.init(PostSchema, Post.config(sequelize));

  //execute methods of associations
  // User.associate(sequelize.models)

}

module.exports = setupModels;