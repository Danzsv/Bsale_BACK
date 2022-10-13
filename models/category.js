const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Category = sequelize.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false, tableName: "category" }
);

module.exports = Category;
