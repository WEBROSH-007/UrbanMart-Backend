const express = require("express");
const { addWishlist } = require("../controllers/wishlistController");


const router = express.Router();

router.post("/add-wishlist", addWishlist);
// router.get("/get-cart", getcart);
// router.delete("/delete-cart", deleteCart);

module.exports = router;
