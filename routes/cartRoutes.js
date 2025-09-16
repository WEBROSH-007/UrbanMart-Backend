const express = require("express");
const { addCart, getcart, deleteCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/add-cart", addCart);
router.get("/get-cart/:userId", getcart);
router.delete("/delete-cart/:id", deleteCart);



module.exports = router;
