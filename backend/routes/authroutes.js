const express = require("express");
const { Login, signup } = require("../controllers/authController");

const router = express.Router();

router.post('/login', Login);
router.post('/signup', signup);

module.exports = router;