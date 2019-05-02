'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrainTimetable = sequelize.define('TrainTimetable', {
    trainType: DataTypes.STRING(8),
    trainNo: DataTypes.INTEGER,
    dep: DataTypes.STRING(8),
    depTime: DataTypes.DATE,
    arr: DataTypes.STRING(8),
    arrTime: DataTypes.DATE
  }, {});
  TrainTimetable.associate = function(models) {
    // associations can be defined here
  };
  return TrainTimetable;
};
