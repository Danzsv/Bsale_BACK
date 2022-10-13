const Category = require("../models/category");
const { categoriesModel, productModel } = require("../models/index");

const getAllCategories = async (req, res) => {
  let data = await Category.findAll();
  return res.send(data);
};

module.exports = { getAllCategories };
