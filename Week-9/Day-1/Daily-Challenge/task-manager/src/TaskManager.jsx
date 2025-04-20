import { useReducer } from "react";
import taskReducer from "./taskReducer";

function TaskManager() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
  
    const handlaAddTask = (text) => {
      dispatch({ type: "ADD_TASK", payload: text });
    };
  
    const handleDeleteTask = (id) => {
      dispatch({ type: "DELETE_TASK", payload: id });
    };
  
    const handleToggleTask = (id) => {
      dispatch({ type: "TOGGLE_TASK", payload: id });
    };
  
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <div className="task">{task.text}</div>
              <button>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlaAddTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    );
  }

export default TaskManager;