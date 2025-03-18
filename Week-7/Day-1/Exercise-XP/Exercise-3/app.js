const express = require("express");
const bookRouter = require("./routes/books.js");

const app = express();
app.use(express.json());
app.use("/", bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
