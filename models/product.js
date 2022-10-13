const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  url_image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
  category: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Product;
