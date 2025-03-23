const {
    showAllUsers,
    showUserById,
    updateUser,
    registerUser,
    loginUser
} = require('../controllers/userControllers.js');
const express = require('express');
const router = express.Router();

router.get('/users', showAllUsers);
router.get('/users/:id', showUserById);
router.put('/users/:id', updateUser);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;