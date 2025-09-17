const wishlistModel = require("../models/wishlistModel");

const addWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      return res
        .status(400)
        .json({ error: "User Id and Product ID is required" });
    }

    // ✅ Check if product already exists for the user
    const existingProduct = await wishlistModel.findOne({
      where: { userId, productId },
    });

    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Wislist already exists in the cart" });
    }

    // ✅ Add product if not exists
    const product = await wishlistModel.create({ userId, productId });

    res.status(201).json({
      message: "Product added to Wishlist successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};
const getWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const userCart = await wishlistModel.findAll({ where: { userId } });

    if (userCart.length === 0) {
      return res
        .status(404)
        .json({ message: "No wishist found for this user" });
    }

    res.status(200).json(userCart);
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const params = req.params;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const wishist = await wishlistModel.findOne({ where: { id } });
    if (!cart) {
      return res.status(400).json({ error: "wishlist not found" });
    }
    await cart.destroy();
    res.status(200).json({ message: "wishlist deleted successfully", cart });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = {
  addWishlist,
  getWishlist,
  deleteWishlist,
};
