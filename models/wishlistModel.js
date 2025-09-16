require("dotenv").config();
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbSequelize");
const signupModel = require("./authModel");
const productModel = require("./productModel");

const wishlistModel = sequelize.define("wishlist", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

wishlistModel.belongsTo(signupModel, { foreignKey: "userId" });
wishlistModel.belongsTo(productModel, { foreignKey: "productId" });

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Urban Mart Wishlist  table created successfully.");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err);
//   });

module.exports = wishlistModel;
