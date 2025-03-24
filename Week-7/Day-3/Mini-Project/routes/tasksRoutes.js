const {
    showAllTasks,
    showtTaskById,
    storeNewTask,
    executeUpdate,
    executeDelete
} = require('../controllers/taskControllers.js')
const express = require('express');
const router = express.Router();

router.get('/tasks', showAllTasks);
router.get('/tasks/:id', showtTaskById);
router.post('/tasks', storeNewTask);
router.put('/tasks/:id', executeUpdate);
router.delete('/tasks/:id', executeDelete);

module.exports = router;