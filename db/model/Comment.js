const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING
  }
  }, {
    sequelize,
    modelName: 'Comment',
  });

module.exports = { Comment };
