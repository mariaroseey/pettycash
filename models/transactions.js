'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactions.init({
    AmountGiven: DataTypes.INTEGER,
    ORNumber: DataTypes.INTEGER,
    Description: DataTypes.STRING,
    Total: DataTypes.INTEGER,
    Purchaser: DataTypes.STRING,
    EmployeeID: DataTypes.INTEGER,
    PersonalContributions: DataTypes.STRING,
    StoreName: DataTypes.STRING,
    Receipts: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};