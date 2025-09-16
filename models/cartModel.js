require("dotenv").config();
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbSequelize");
const signupModel = require("./authModel");
const productModel = require("./productModel");

const cartModel = sequelize.define("cart", {
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

cartModel.belongsTo(signupModel, { foreignKey: "userId" });
cartModel.belongsTo(productModel, { foreignKey: "productId" });

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Urban Mart Cart  table created successfully.");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err);
//   });

module.exports = cartModel;
