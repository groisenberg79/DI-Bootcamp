const cors = require("cors");
const express = require("express");
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.get("/api/hello", (req, res) => {
  res.json("Hello From Express!");
});

app.post("/api/world", (req, res) => {
  const userInput = req.body.input;
  res.json(
    `I received your POST request. This is what you sent me: ${userInput}`
  );
});
