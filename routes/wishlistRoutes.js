const express = require("express");
const {
  addWishlist,
  getWishlist,
  deleteWishlist,
} = require("../controllers/wishlistController");

const router = express.Router();

router.post("/add-wishlist", addWishlist);
router.get("/get-wishlist/:userId", getWishlist);
router.delete("/delete-wishlist/:id", deleteWishlist);

module.exports = router;
