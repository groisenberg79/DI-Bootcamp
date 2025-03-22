const { getAllPosts } = require('../models/postsQueries.js')

const showAllPosts = ((req, res) => {
    getAllPosts()
        .then((posts) => res.status(200).json(posts))
        .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = { showAllPosts };