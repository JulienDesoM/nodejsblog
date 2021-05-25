const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Tag extends Model {}

Tag.init({
  tagtitle: {
    type: DataTypes.STRING,
  }});

module.exports = { Tag };
