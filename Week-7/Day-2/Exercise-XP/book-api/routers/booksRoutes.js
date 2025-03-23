const { showAll, showById, createBookRecord } = require('../controllers/booksControllers.js');
const express = require('express');
const router = express.Router();

router.get('/api/books', showAll);
router.get('/api/books/:bookId', showById);
router.post('/api/books', createBookRecord);

module.exports = router;