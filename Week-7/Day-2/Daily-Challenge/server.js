const express = require('express');
const { PORT } = require('./config/config.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();

app.use(express.json());
app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})



