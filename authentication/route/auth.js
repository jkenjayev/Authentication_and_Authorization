const { User, validate } = require("../module/auth");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const _ = require("lodash");

router.post("/", async (req, res) => {
  // validate first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const result = await user.save();
  
  res.status(201).send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;  