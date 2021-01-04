const { User, validate } = require("../module/auth");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/", async (req, res) => {
  // validate first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const result = await user.save();
});

module.exports = router;