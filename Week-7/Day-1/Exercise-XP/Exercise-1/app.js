const express = require("express");
const index_router = require("./routes/index");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/", index_router);
