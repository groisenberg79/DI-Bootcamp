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


const showPostById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await getPostById(id);
        if (post.length > 0) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

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
        const output = await updateQuery(id, new_title, new_content);
        if (output.length > 0) {
            res.status(200).json('Post updated successfully')
        } else {
            res.status(404).json("User not found")
        }
        
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const deletePost = async (req,res) => {
    const id = req.params.id;
    try {
       const output = await deleteQuery(id);
        if (output.length > 0) {
            res.status(200).json({message:'Post deleted successfully'});
       } else {
            res.status(404).json({message: 'User not found'})
       }
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