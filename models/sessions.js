'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define('Sessions', {
    sid: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.STRING(50000),
    userID: DataTypes.STRING(32)
  }, {});
  Sessions.associate = function(models) {
    // associations can be defined here
  };
  return Sessions;
};
