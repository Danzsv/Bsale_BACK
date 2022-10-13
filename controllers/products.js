const Category = require("../models/category");
const Product = require("../models/product");

// const { categoriesModel, productModel } = require("../models/index");
const { sequelize } = require("../config/mysql");

const queryProducts = async () => {
  const [results, metadata] = await sequelize.query(
    "SELECT * ,product.id as product_id, product.name as product_name FROM product INNER JOIN category ON product.category = category.id "
    // "SELECT product.id as Product_id, product.name as Product_name,product.url_image,product.price,product.discount,product.category FROM product INNER JOIN category ON product.category = category.id "
  );
  return results;
};

const getAllProducts = async (req, res, next) => {
  const { name } = req.query;

  try {
    const results = await queryProducts();

    if (name) {
      let productName = results.filter((element) =>
        element.product_name.toLowerCase().includes(name.trim().toLowerCase())
      );
      // console.log(productName);
      if (productName.length === 0) {
        res.status(200).send({ msg: "No existe el producto" });
      } else {
        return res.status(200).send(productName);
      }
    } else {
      return res.status(200).send(results);
    }
  } catch (e) {
    console.log(e.message);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await queryProducts();

    let productId = results.filter((element) => element.product_id == id);
    // console.log(productId);
    if (productId.length === 0) {
      return res.send({ msg: "No existe item con ese id" });
    }
    return res.status(200).send(productId);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAllProducts, getProductById };
