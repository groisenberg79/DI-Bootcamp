import { TodoList } from "./todo.js";
const myList = new TodoList();

myList.addTask("Buy tomato");
myList.addTask("sell car");
myList.addTask("pay Billy the bribe");

myList.completeTask("pay Billy the bribe");

myList.showTasks();
