'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TrainTimetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trainType: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      trainNo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dep: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      depTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      arr: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      arrTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TrainTimetables');
  }
};
