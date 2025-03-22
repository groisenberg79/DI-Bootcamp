const {     
    getAllPosts, 
    getPostById,
    newPost,
    updateQuery,
    deleteQuery
} = require('../models/postsQueries.js')

const showAllPosts = ((req, res) => {
    getAllPosts()
        .then((posts) => res.status(200).json(posts))
        .catch((err) => res.status(500).json({ error: err.message }));
});


const showPostById = ((req, res) => {
    const id = req.params.id;
    getPostById(id)
        .then((post) => res.status(200).json(post))
        .catch((err) => res.status(500).json({error: err.message}));
})

const postToBlog = async (req, res) => {
    const new_title = req.body.title;
    const new_content = req.body.blog_content;
    try {
        await newPost(new_title, new_content);
        res.status(200).json('New post successfully uploaded');
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const updatePost = async (req, res) => {
    const id = req.params.id;
    const new_title = req.body.title;
    const new_content = req.body.blog_content;

    try {
        await updateQuery(id, new_title, new_content);
        res.status(200).json('Post updated successfully')
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const deletePost = async (req,res) => {
    const id = req.params.id;
    try {
        await deleteQuery(id);
        res.status(200).json('Post deleted successfully')
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = { 
    showAllPosts,
    showPostById,
    postToBlog,
    updatePost,
    deletePost
 };