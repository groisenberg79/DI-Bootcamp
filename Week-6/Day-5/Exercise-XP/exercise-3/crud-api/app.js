const express = require("express");
const { fetchPosts } = require("./data/dataService.js");
const app = express();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

app.get("/crud-api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("fetch request successful!");
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: `Something went wrong: ${error}` });
  }
});
