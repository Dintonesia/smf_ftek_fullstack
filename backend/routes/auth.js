const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // make sure path is correct

const router = express.Router();

// LOGIN route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"});

    res.json({ token });
  } catch (err) {
	  console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // ✅ this is critical
