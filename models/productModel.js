require('dotenv').config();
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbSequelize");

const productModel = sequelize.define("product",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title :{
        type: DataTypes.STRING,
        allowNull: false,
      },
      price : {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      description : {
        type: DataTypes.STRING,
        allowNull: true, 
      },
      image : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category : {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
})

// sequelize
//   .sync({ force:false })
//   .then(() => {
//     console.log("Urban Mart Product  table created successfully.");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err);
//   });


module.exports = productModel;
