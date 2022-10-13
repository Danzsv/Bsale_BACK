const { categoriesModel, productModel } = require("./models/index");

//One to One

productModel.hasOne(categoriesModel, {
  foreignKey: "id",
});

//One to many
categoriesModel.belongsTo(productModel);
