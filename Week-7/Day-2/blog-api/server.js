const express = require('express');
const { PORT } = require('./config/config.js');
const app = express();
const blogRouter = require('./routes/blogRouter.js')

app.use(express.json());

app.listen(PORT, () => {
    console.log( `Running on port ${PORT}`);
});

app.use('/',blogRouter);


