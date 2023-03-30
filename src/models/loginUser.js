
const { LoginUser } = require('sequelize');
const sequelize = require('./sequelize');

const LoginUser = sequelize.define('LoginUser', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = LoginUser;