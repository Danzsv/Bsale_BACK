// const { categoriesModel, productModel } = require("./models/index");
// const Product = require("./models/product");
// const Category = require("./models/category");
//One to One
// productModel.belongsTo(categoriesModel, {
//   as: "category",
//   foreignKey: "id",
// });
// Product.belongsTo(Category, { foreignKey: "category" });

// Category.hasMany(Product, {
//   through: "Product_Category",
//   foreignKey: "category",
// });
// productModel.hasOne(categoriesModel);
// // , {
// // foreignKey: "id",
// // }

// //One to many
// categoriesModel.hasMany(productModel);
// // , {
// // foreignKey: "id",
// // }
