const express = require("express");

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

const books = [
  {
    id: 1,
    title: "The Joy of JavaScript",
    author: "Luis Atencio",
    publishedYear: 2021,
  },
  {
    id: 2,
    title: "CSS in Depth, Second Edition",
    author: "Keith J. Grant",
    publishedYear: 2024,
  },
  {
    id: 3,
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    publishedYear: 2020,
  },
  {
    id: 4,
    title: "SQL Queries for Mere Mortals",
    author: "John L. Viescas",
    publishedYear: 2018,
  },
];

app.use(express.json());

app.get("/api/books", (req, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: `Something went wrong: ${err}` });
  }
});

app.get("/api/books/:bookId", (req, res) => {
  const { book_id } = req.params;
  const book = books.find((item) => item.id == book_id);
  if (!book) {
    res.status(404).json({ message: "book not found" });
    return;
  }
  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const new_book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(new_book);
  res.status(201).json(new_book);
});
