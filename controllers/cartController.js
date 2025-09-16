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
    const existingProduct = await cartModel.findOne({
      where: { userId, productId },
    });

    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Product already exists in the cart" });
    }

    // ✅ Add product if not exists
    const product = await cartModel.create({ userId, productId });

    res.status(201).json({
      message: "Product added to cart successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = {
  addCart,
};
