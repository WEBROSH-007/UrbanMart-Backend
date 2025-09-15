require('dotenv').config();


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("urban_mart", "postgres", "db@123", {
  host: process.env.DB_HOST,
  dialect: "postgres",
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database test connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

module.exports = {
  sequelize,
  testConnection,
};
