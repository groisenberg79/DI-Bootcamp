const tasks = [];
const form = document.getElementById('form');
form.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();
    const input = document.getElementById('input').value;
    const task_list = document.getElementById('task_list');
    if (input !== ""){
        tasks.push(input);
        const task_container = createTaskContainer();
        
        icon = createIcon();
        task_container.appendChild(icon);
        
        const checkbox = CreateCheckbox();
        task_container.appendChild(checkbox);
        
        const task_description = CreateTaskDescription(input);
        task_container.appendChild(task_description);
        
        task_list.appendChild(task_container);

        hr = document.createElement('hr');
        task_list.appendChild(hr);
    }
}

function createTaskContainer(){// creaete a container for each new task item
    const task_item = document.createElement('div');
    task_item.setAttribute('class', 'task_item');
    return task_item;
}

function createIcon(){// create 'x' icon
    const img = document.createElement('img');
    img.setAttribute('src', 'assets/svgs/solid/xmark.svg');
    return img;
}

function CreateCheckbox(){// create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'task' + (tasks.length + 1));
    return checkbox;
}

function CreateTaskDescription(text){// create task description
    const task_description = document.createElement('label');
    task_description.setAttribute('for', 'task' + (tasks.length + 1));
    const text_node = document.createTextNode(text);
    task_description.appendChild(text_node);
    return task_description;
}