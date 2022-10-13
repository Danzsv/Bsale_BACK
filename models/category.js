const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Category = sequelize.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Category;
