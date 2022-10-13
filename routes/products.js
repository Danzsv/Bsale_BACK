const { Router } = require("express");
const router = Router();

const {
  getAllProducts,
  getProductById,
} = require("../controllers/products.js");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

module.exports = router;
