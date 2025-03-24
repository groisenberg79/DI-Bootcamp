const express = require('express');
const { PORT } = require('./config/config.js');
const app = express();
const taskRouter = require('./routes/tasksRoutes.js');

app.use(express.json());
app.use('/', taskRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})