const { categoriesModel, productModel } = require("../models/index");

const getAllProducts = async (req, res) => {
  const { name } = req.query;

  try {
    let productsDb = await productModel.findAll({
      include: {
        model: categoriesModel,
        attributes: ["name"],
      },
    });
    if (name) {
      let productName = productsDb.filter((element) =>
        element.name.toLowerCase().includes(name.trim().toLowerCase())
      );
      if (productName.length === 0) {
        res.status(200).send({ msg: "No existe el producto" });
      } else {
        return res.status(200).send(productName);
      }
    } else {
      return res.status(200).send(productsDb);
    }
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getAllProducts };
