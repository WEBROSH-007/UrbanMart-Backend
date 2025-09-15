
const { testConnection } = require("./db/dbSequelize");
testConnection();



const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.SERVER_PORT || 4000;


const authRoutes = require("./routes/authRoutes");
const productRoutes= require("./routes/productRoutes")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
