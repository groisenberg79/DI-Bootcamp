const express = require('express');
const { PORT } = require('./config/config.js');
const booksRouter = require('./routers/booksRoutes.js');

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log( `Running on port ${PORT}`);
});

app.use('/', booksRouter);