const { gameState, triviaQuestions } = require("../config/data.js");

const getRandom = () => {
  const index = Math.floor(Math.random() * triviaQuestions.length);
  return triviaQuestions[index];
};

const updateGameState = () => {
  const new_game_state = getRandom();
  gameState.current_question = new_game_state.question;
  gameState.correct_answer = new_game_state.answer;
  if (gameState.correct_answer) {
    gameState.user_answer = null;
  }
};

const welcome = (req, res) => {
  gameState.score = 0;
  updateGameState();
  const intro = {
    welcome: "Welcome to the Trivia Game!",
    question: gameState.current_question,
  };
  res.status(200).json(intro);
};

const getScore = (req, res) => {
  res.status(200).json({
    final_score: gameState.score,
    message: "Thanks for playing!",
  });
};

const checkAnswer = (req, res, next) => {
  const userAnswer = req.body.answer;
  if (
    !userAnswer ||
    typeof userAnswer !== "string" ||
    userAnswer.trim() === ""
  ) {
    return res
      .status(400)
      .json({ error: "Answer is required and must be a valid string!" });
  }
  if (userAnswer.toLowerCase() === gameState.correct_answer.toLowerCase()) {
    gameState.score += 1;
    gameState.user_answer = true;
  } else {
    gameState.user_answer = false;
  }

  next();
};

const nextQuestion = (req, res) => {
  const correct_answer = gameState.correct_answer;
  const user_answer = gameState.user_answer;
  updateGameState();
  if (user_answer === true) {
    res.status(200).json({
      message: `Your answer is correct!`,
      next_question: gameState.current_question,
    });
  } else {
    res.status(200).json({
      message: `Wrong. The correct answer is ${correct_answer}`,
      next_question: gameState.current_question,
    });
  }
};

module.exports = { welcome, getScore, checkAnswer, nextQuestion };
