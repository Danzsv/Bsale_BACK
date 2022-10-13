const Category = require("../models/category");
const Product = require("../models/product");

// const { categoriesModel, productModel } = require("../models/index");
const { sequelize } = require("../config/mysql");

const getAllProducts = async (req, res) => {
  const { name } = req.query;

  try {
    const [results, metadata] = await sequelize.query(
      "SELECT * ,product.id as product_id, product.name as product_name FROM product INNER JOIN category ON product.category = category.id "
      // "SELECT product.id as Product_id, product.name as Product_name,product.url_image,product.price,product.discount,product.category FROM product INNER JOIN category ON product.category = category.id "
    );
    // const [results2, metadata2] = await sequelize.query(
    //   "SELECT category.id as category_id, category.name as category_name FROM category INNER JOIN product ON product.category = category.id "
    //   // "SELECT product.id as Product_id, product.name as Product_name,product.url_image,product.price,product.discount,product.category FROM product INNER JOIN category ON product.category = category.id "
    // );
    // console.log(JSON.stringify(results2, null, 2));
    const productsDb = JSON.stringify(results, null, 2);

    // let productsDb = await Product
    //   .findAll
    //   // include: {
    //   //   model: Category,
    //   //   attributes: ["name"],
    //   // },
    //   ();
    if (name) {
      // console.log(productsDb);
      let productName = productsDb.filter((element) =>
        element.product_name.toLowerCase().includes(name.trim().toLowerCase())
      );
      // console.log(productName);
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
