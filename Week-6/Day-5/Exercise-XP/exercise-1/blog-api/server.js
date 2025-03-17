const express = require("express");

// setting up the server
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

const db = [
  {
    id: 1,
    title: "Minim officia veniam ipsum exercitation",
    content:
      "Excepteur ea ad quis commodo aliqua. Enim eiusmod qui officia do velit officia sit aliqua elit exercitation. Nulla dolore ea sit deserunt veniam elit.",
  },
  {
    id: 2,
    title:
      "Ea labore dolor sit laborum non velit ipsum Lorem qui aliqua nostrud proident et",
    content:
      "Do culpa amet commodo nostrud incididunt dolore dolor dolor labore ex esse aute deserunt et. Dolor aliquip laboris in officia in est dolor aute aute mollit. Amet ex laboris proident deserunt ea sint elit eiusmod officia esse sit ipsum commodo cillum. Reprehenderit excepteur cillum consequat in eiusmod consequat mollit dolor. Esse in consequat irure veniam aliquip in laboris est ullamco amet sunt laborum. Irure reprehenderit officia ullamco adipisicing pariatur nostrud voluptate est sint.",
  },
  {
    id: 3,
    title:
      "Ipsum excepteur id irure occaecat nostrud elit nisi mollit do enim ea adipisicing reprehenderit et",
    content:
      "Voluptate duis eu sunt incididunt eu cupidatat culpa. Incididunt ea occaecat reprehenderit irure culpa officia fugiat amet. Qui cillum aliqua magna cupidatat nisi ut dolor esse. Velit consequat reprehenderit elit laboris mollit veniam. Ad mollit ut irure velit nostrud ullamco veniam eiusmod velit excepteur.",
  },
];

// route for getting all blog posts, including id and title
app.get("/blog-api/posts", (req, res) => {
  try {
    res.status(201).json(db);
  } catch (error) {
    res.status(400).send("Something is wrong ...");
  }
});

// route for getting a specific blog post according to id
app.get("/blog-api/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = db.find((item) => item.id == id);
  if (!post) {
    res.status(404).json({ message: "post not found" });
    return;
  }
  res.json(post)
});


