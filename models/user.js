'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(32)
    },
    password_hash: {
      allowNull: false,
      type: DataTypes.STRING(64)
    },
    trainID: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    roomID: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
