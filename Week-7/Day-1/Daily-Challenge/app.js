const express = require('express');
const quizRouter = require('./routes/trivia.js');
const app = express();


app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

app.use('/', quizRouter);