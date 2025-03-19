const express = require("express");
const {
  welcome,
  getScore,
  checkAnswer,
  nextQuestion,
} = require("../controllers/questions.js");
const router = express.Router();

router.get("/quiz", welcome);

router.get("/quiz/score", getScore);

router.post("/quiz", [checkAnswer, nextQuestion]);

module.exports = router;
