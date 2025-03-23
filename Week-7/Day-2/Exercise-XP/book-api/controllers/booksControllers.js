const { queryAll, queryById, createQuery } = require('../models/booksQueries.js');

const showAll = async (req, res) => {
    try {
        const all_books = await queryAll();
        res.status(200).json(all_books);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const showById = async (req, res) => {
    const id = req.params.bookId;
    try {
        const book = await queryById(id);
        if ( book.length > 0) {
            res.status(200).json(book);
        } else {
            res.status(404).json({message: 'Book not found'});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const createBookRecord = async (req, res) => {
    const book_title = req.body.title;
    const book_author = req.body.author;
    const book_year = req.body.published_year;
    try {
        await createQuery(book_title, book_author, book_year);
        res.status(200).json({message: "Book record successfully added"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { showAll, showById, createBookRecord };