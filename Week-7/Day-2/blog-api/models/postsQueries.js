const { database } = require('../config/database.js')

const getAllPosts = () => {
    return database.select().from('posts');
};

module.exports = { getAllPosts };

const getPostById = (id) => {
    return database.select().from('posts').where({user_id: id});
}
