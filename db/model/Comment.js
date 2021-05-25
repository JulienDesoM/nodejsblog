const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Comment extends Model {}

Comment.init({
  commentcontent: {
    type: DataTypes.STRING,
  },
  commentdate: {
    type: DataTypes.STRING
  }
  }, {
    sequelize,
    modelName: 'Comment',
  });

module.exports = { Comment };
