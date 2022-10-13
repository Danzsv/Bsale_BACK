const { Router } = require("express");
const { getAllCategories } = require("../controllers/categories");
const router = Router();

router.get("/", getAllCategories);

module.exports = router;
