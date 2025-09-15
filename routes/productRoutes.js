const express = require("express");
const { addProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.post("/add-product", addProduct);
router.get("/get-product", getProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);


module.exports = router;