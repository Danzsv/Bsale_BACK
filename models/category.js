const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Product = require("./product");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false, tableName: "category" }
);

module.exports = Category;
