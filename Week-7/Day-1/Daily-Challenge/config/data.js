const gameState = {
  score: 0,
  current_question: null, // this will be a string (the question)
  correct_answer: null, // this will be a string (the actual answer)
  user_answer: null, // this will be a boolean (right/wrong answer to current_answer)
};

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
  {
    question: "Which country has the highest life expectancy?",
    answer: "Hong Kong",
  },
  {
    question: "What city is known as 'The Eternal City'?",
    answer: "Rome",
  },
  {
    question: "In which country would you find Mount Kilimanjaro?",
    answer: "Tanzania",
  },
  {
    question: "What is the largest Spanish-speaking city in the world?",
    answer: "Mexico City",
  },
  {
    question: "Which country has the most islands?",
    answer: "Sweden (270,000)",
  },
  {
    question: "In which U.S. state is the country's busiest airport located?",
    answer: "Georgia (Hartsfield-Jackson Atlanta International Airport)",
  },
  {
    question: "Which is the only continent with land in all four hemispheres?",
    answer: "Africa",
  },
];

module.exports = { gameState, triviaQuestions };
