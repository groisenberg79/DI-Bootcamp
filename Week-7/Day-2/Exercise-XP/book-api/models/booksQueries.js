const { database } = require('../config/database.js');

const queryAll = () => {
    return database('books').select();
}

const queryById = (id) => {
    return database('books').where({book_id: id});
}

const createQuery = (book_title, book_author, book_year) => {
    return database('books')
        .insert({title: book_title, author: book_author, published_year: book_year});
}

module.exports = {
    queryAll,
    queryById,
    createQuery
}