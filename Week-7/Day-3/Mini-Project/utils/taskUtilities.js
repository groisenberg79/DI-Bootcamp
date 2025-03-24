const fs = require('fs').promises;
const { filePath } = require('../config/config.js');

const getAllTasks = async () => {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const tasks = await JSON.parse(fileContent);
    return tasks;
}

const getTaskById = async (id) => {
    const tasks = await getAllTasks();
    const foundTask = tasks.find(task => task.id === id);
    return foundTask || null; // if task found, returns foundTask, otherwise null
}

const createNewTask = async (id, task, status) => {
    const tasks = await getAllTasks();
    const newTask = {id: id, task: task, status: status};
    tasks.push(newTask);
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8');

    return newTask;
}

const updateTaskById = async (id, task, status) => {
    const tasks = await getAllTasks();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            id: id, 
            task: task, 
            status: status
        };
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8');
        return tasks[taskIndex];
    } else {
        return null;
    }
}

const deleteTaskById = async (id) => {
    const tasks = await getAllTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);

    // If the length is the same, it means the task was not found
    if (filteredTasks.length === tasks.length) {
        return null; // Task not found
    }

    await fs.writeFile(filePath, JSON.stringify(filteredTasks, null, 2), 'utf8');
    return { message: 'Task deleted successfully', deletedTaskId: id };
}

module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTaskById,
    deleteTaskById
}