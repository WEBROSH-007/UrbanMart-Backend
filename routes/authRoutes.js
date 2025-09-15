const express = require("express");
const { signupUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/urban-signup", signupUser);
router.post("/urban-login", loginUser);

module.exports = router;