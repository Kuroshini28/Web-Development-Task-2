document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.classList.add('remove-btn');

        listItem.appendChild(taskSpan);
        listItem.appendChild(removeBtn);

        taskList.appendChild(listItem);
        taskInput.value = '';

        // Add event listeners to the new elements
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        removeBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }
});