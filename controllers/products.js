const { categoriesModel, productsModel } = require("../models/index");

const getAllProducts = async () => {
  try {
    let productsDb = await productsModel.findAll({
      include: {
        model: categoriesModel,
        attributes: [],
      },
    });
    return productsDb;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getAllProducts };
