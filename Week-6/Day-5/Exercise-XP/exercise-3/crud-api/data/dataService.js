const axios = require("axios");

async function fetchPosts() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;
    return posts;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { fetchPosts };
