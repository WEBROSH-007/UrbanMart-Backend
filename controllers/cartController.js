const cartModel = require("../models/cartModel");

const addCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      return res
        .status(400)
        .json({ error: "User Id and Product ID is required" });
    }

    // ✅ Check if product already exists for the user
    const existingCart = await cartModel.findOne({
      where: { userId, productId },
    });

    if (existingCart) {
      return res.status(400).json({ error: "Cart already exists in the cart" });
    }

    // ✅ Add product if not exists
    const cart = await cartModel.create({ userId, productId });

    res.status(201).json({
      message: "Product added to cart successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};
const getcart = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const userCart = await cartModel.findAll({ where: { userId } });

    if (userCart.length === 0) {
      return res.status(404).json({ message: "No cart found for this user" });
    }

    res.status(200).json(userCart);
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const params = req.params;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const cart = await cartModel.findOne({ where: { id } });
    if (!cart) {
      return res.status(400).json({ error: "Cart not found" });
    }
    await cart.destroy();
    res.status(200).json({ message: "Cart deleted successfully", cart });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = {
  addCart,
  getcart,
  deleteCart,
};
