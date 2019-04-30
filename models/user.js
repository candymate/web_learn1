'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: DataTypes.STRING(32),
    password_hash: DataTypes.STRING(64)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
