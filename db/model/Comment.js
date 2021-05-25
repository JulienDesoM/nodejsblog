const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Comment extends Model {}

Comment.init({
  commentcontent: {
    type: DataTypes.STRING,
  },
  commentdate: {
    type: DataTypes.STRING
  }});

module.exports = { Comment };
