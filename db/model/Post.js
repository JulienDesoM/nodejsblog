const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Post extends Model {}

Post.init({
  posttitle: {
    type: DataTypes.STRING,
  },
  postcontent: {
    type: DataTypes.TEXT
  },
  postdate: {
    type: DataTypes.DATE
  }
  // propriétés des objets Post
}, {
  sequelize,
  modelName: 'Post',
});

module.exports = { Post };
