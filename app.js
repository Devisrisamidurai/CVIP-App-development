function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskInput.value}
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById('task-list');
    taskList.removeChild(taskItem);
}
