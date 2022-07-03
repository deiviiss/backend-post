const { Model, DataTypes, Sequelize } = require('sequelize')
//table name
const POST_TABLE = 'post'

//table structure
const PostSchema = {
  postId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
    field: 'post_id'
  },
  post: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'This is a post'
  },
  image: {
    allowNull: false,
    type: DataTypes.JSON,

  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    unique: true,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

//contains the User model
class Post extends Model {
  static associate(models) {
    // this.hasOne(models.Thought, { as: 'thought', foreignKey: 'userId' })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: POST_TABLE,
      modelName: "Post",
      timestamps: false
    }
  }
}

module.exports = { Post, PostSchema, POST_TABLE }