const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database")

module.exports = {
  Product: sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
     name: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     description: {
      type: DataTypes.TEXT,
      allowNull: true
     },
     price: {
      type: DataTypes.DECIMAL,
      allowNull: false
     },
     imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
     },
  })
}