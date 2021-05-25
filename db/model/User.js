const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING
  },
  password : {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'User',
});

module.exports = { User };
