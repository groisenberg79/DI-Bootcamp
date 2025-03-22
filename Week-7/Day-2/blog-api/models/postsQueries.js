const { database } = require('../config/database.js')

const getAllPosts = () => {
    return database.select().from('posts');
};

const getPostById = (id) => {
    return database
        .select()
        .from('posts')
        .where({user_id: id});
}

const newPost = (new_title, new_content) => {
  return  database('posts').insert({title: new_title, blog_content: new_content});
}

const updateQuery = (id, new_title, new_content) => {
    return database('posts')
        .where('user_id', id)
        .update({title: new_title, blog_content: new_content});
}

const deleteQuery = (id) => {
    return database('posts')
        .where('user_id', id)
        .del(['user_id', 'title', 'blog_content']);
}

module.exports = { 
    getAllPosts, 
    getPostById,
    newPost,
    updateQuery,
    deleteQuery
  };