const {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTaskById,
    deleteTaskById
} = require('../utils/taskUtilities.js');

// DELETE /tasks/:id: Delete a task by ID from the JSON file.

const showAllTasks = async (req, res) => {
    try {
        const tasks = await getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const showtTaskById = async (req, res) => {
    const id = Number(req.params.id);
    const task = await getTaskById(id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({message: 'task not found'});
    }
}

const storeNewTask = async (req, res) => {
    const {id, task, status} = req.body;
    try {
        const newTask = await createNewTask(id, task, status);
        res.status(200).json({message: 'new task stored', task: newTask}, );
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

const executeUpdate = async (req, res) => {
    const id = Number(req.params.id);
    const {task, status} = req.body;
    const updatedTask = await updateTaskById(id, task, status);
    if (updatedTask) {
        res.status(200).json({message: "task updated", task: updatedTask});
    } else {
        res.status(404).json({message: "task not found"});
    }
}

const executeDelete = async (req, res) => {
    const id = Number(req.params.id);
    const response =await deleteTaskById(id);
    if (response) {
        res.status(200).json(response);
    } else {
        res.status(404).json({message: "task not found"});
    }
}

module.exports = {
    showAllTasks,
    showtTaskById,
    storeNewTask,
    executeUpdate,
    executeDelete
}