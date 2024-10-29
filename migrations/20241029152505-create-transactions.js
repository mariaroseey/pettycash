'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AmountGiven: {
        type: Sequelize.INTEGER
      },
      ORNumber: {
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.STRING
      },
      Total: {
        type: Sequelize.INTEGER
      },
      Purchaser: {
        type: Sequelize.STRING
      },
      EmployeeID: {
        type: Sequelize.INTEGER
      },
      PersonalContributions: {
        type: Sequelize.STRING
      },
      StoreName: {
        type: Sequelize.STRING
      },
      Receipts: {
        type: Sequelize.BLOB
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};