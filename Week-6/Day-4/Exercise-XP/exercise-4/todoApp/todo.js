class TodoList {
  constructor(tasks = {}) {
    this.tasks = tasks;
  }

  addTask(task) {
    if (typeof task === "string") {
      this.tasks[task.toLowerCase()] = false;
      console.log("Task added succesfully");
    } else {
      console.error("Task must be a string!");
    }
  }

  completeTask(task) {
    const keys = Object.keys(this.tasks);
    if (keys.includes(task.toLowerCase())) {
      this.tasks[task.toLowerCase()] = true;
    } else {
      console.log("Task not found");
    }
  }

  showTasks() {
    for (let key in this.tasks) {
      if (this.tasks[key] === true) {
        console.log(`${key}: complete`);
      } else {
        console.log(`${key}: incomplete`);
      }
    }
  }
}

export { TodoList };
