const express = require('express');
const { PORT } = require('./config/config.js');
const app = express();

app.listen(PORT, () => {
    console.log( `Running on port ${PORT}`);
});


