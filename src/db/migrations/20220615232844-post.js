'use strict';
const { POST_TABLE } = require('../models/post.model.js');
const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.createTable(POST_TABLE, {
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
    });

  },

  down: async (queryInterface) => {

    await queryInterface.dropTable(POST_TABLE);
  }
};
