const express = require("express");
const router = express.Router();

const todos = [
  { id: 1, task: "buy tomato", complete: false },
  { id: 2, task: "pay the bills", complete: true },
  { id: 3, task: "pay divorce lawyer", complete: false },
  { id: 4, task: "send threat to ex-wife", complete: true },
];

// Get all to-do items
router.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

// Add a new to-do item
router.post("/todos", (req, res) => {
  const new_todo = {
    id: todos.length + 1,
    task: req.body.task,
    complete: req.body.complete,
  };
  todos.push(new_todo);
  res.status(200).json({ message: "new to-do item added successfully" });
});

// Update a to-do item by ID
router.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json("task not found");
    return;
  }
  const updated = {
    id: todos[index].id,
    task: req.body.task,
    complete: req.body.complete,
  };
  todos[index] = updated;
  res.status(200).json("task updated");
});

// Delete a to-do item by ID
router.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json("task not found");
    return;
  }
  todos.splice(index, 1);
  res.status(200).json("item deleted successfully");
});

module.exports = router;
