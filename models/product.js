const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Category = require("./category");
const categoriesModel = require("./index");
const Product = sequelize.define(
  "Product",
  {
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
      // references: "Category",
      // referencesKey: "id",
    },
  },
  { timestamps: false, tableName: "product" }
);

// Product.associate = function () {
//   // console.log("category", categoriesModel);
//   Product.belongsTo(categoriesModel, {
//     as: "id",
//     foreignKey: "category",
//   });
//   return Product.findAll({ include: categoriesModel });
// };

module.exports = Product;
