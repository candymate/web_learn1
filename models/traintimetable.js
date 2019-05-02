'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrainTimetable = sequelize.define('TrainTimetable', {
    trainType: {
      allowNull: false,
      type: DataTypes.STRING(8)
    },
    trainNo: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dep: {
      allowNull: false,
      type: DataTypes.STRING(8)
    },
    depTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    arr: {
      allowNull: false,
      type: DataTypes.STRING(8)
    },
    arrTime: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  TrainTimetable.associate = function(models) {
    // associations can be defined here
  };
  return TrainTimetable;
};
