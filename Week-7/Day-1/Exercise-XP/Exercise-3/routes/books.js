const express = require("express");
const router = express.Router();

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

// Get all books
router.get("/books", (req, res) => {
  res.status(200).json(books);
});

// Add a new book
router.post("/books", (req, res) => {
  const new_book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(new_book);
  res.status(200).json({ message: "book added successfully" });
});

// Update a book by ID
router.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((item) => {
    return item.id === id;
  });
  if (index === -1) {
    res.status(404).json("book not found");
    return;
  }
  const new_book = {
    id: books[index].id,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books[index] = new_book;
  res.status(200).json({ message: "book entry updated" });
});

// Delete a book by ID
router.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((item) => {
    return item.id === id;
  });
  if (index === -1) {
    res.status(404).json({ message: "book not found" });
    return;
  }
  books.splice(index, 1);
  res.status(200).json({ message: "book deleted successfully" });
});

module.exports = router;
