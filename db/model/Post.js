const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT
  },
  date: {
    type: DataTypes.DATE
  }
  // propriétés des objets Post
}, {
  sequelize,
  modelName: 'Post',
});

module.exports = { Post };
