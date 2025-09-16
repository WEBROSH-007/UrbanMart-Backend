require("dotenv").config();
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbSequelize");

const signupModel = sequelize.define("Signup", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Urban Mart Auth  table created successfully.");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err);
//   });

module.exports = signupModel;
