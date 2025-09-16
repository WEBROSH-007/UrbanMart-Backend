const express = require("express");
const { addCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/add-cart", addCart);
// router.get("/get-cart", getcart);
// router.delete("/delete-cart", deleteCart);

module.exports = router;
