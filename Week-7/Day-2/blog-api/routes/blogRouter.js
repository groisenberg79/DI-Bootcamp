const express = require('express');
const router = express.Router();
const {
    showAllPosts,
    showPostById,
    postToBlog,
    updatePost,
    deletePost
} = require('../controllers/blogControllers.js');

router.get('/posts', showAllPosts);
router.get('/posts/:id', showPostById);
router.post('/posts', postToBlog);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;