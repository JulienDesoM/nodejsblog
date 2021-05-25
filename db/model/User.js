const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
  },
  usermail: {
    type: DataTypes.STRING
  },
  userpassword : {
    type: DataTypes.STRING,
  },
  userrole: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'User',
});

module.exports = { User };
