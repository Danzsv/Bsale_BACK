const Category = require("../models/category");
const { categoriesModel, productModel } = require("../models/index");

const getAllCategories = async (req, res) => {
  try {
    let data = await Category.findAll();
    return res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAllCategories };
