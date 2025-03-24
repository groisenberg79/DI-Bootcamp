const PORT = 3000;
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

module.exports = {PORT, filePath};