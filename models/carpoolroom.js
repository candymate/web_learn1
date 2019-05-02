'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarpoolRoom = sequelize.define('CarpoolRoom', {
    time: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  CarpoolRoom.associate = function(models) {
    // associations can be defined here
  };
  return CarpoolRoom;
};
