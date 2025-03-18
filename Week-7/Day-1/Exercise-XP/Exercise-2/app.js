const express = require("express");
const todoRouter = require("./routes/todos.js");

const app = express();
app.use(express.json());

app.use("/", todoRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
