const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Home");
});

router.get("/about", (req, res) => {
  res.status(200).json("About");
});

module.exports = router;
