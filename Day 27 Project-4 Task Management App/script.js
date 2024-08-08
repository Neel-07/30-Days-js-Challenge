document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const tasksUl = document.getElementById('tasks');
    const currentDateEl = document.getElementById('current-date');
    const cancelBtn = document.querySelector('.cancel-btn');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let editId = null;

    // Set current date in the header
    const setDate = () => {
        const today = new Date();
        const dateString = `${today.toDateString()}`;
        currentDateEl.textContent = dateString;
    };

    // Save tasks to localStorage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Load tasks from localStorage
    const loadTasks = () => {
        tasksUl.innerHTML = '';
        tasks.forEach((task) => {
            createTaskElement(task);
        });
    };

    // Create task element
    const createTaskElement = ({ id, title, description, dueDate }) => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.setAttribute('data-id', id);
        li.innerHTML = `
            <div class="task-details">
                <span class="task-title">${title}</span>
                <p class="task-desc">${description}</p>
                <span class="task-date">Due: ${dueDate}</span>
            </div>
            <div class="task-actions">
                <button class="edit-task" title="Edit Task"><i class="fas fa-edit"></i></button>
                <button class="delete-task" title="Delete Task"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;

        li.querySelector('.edit-task').addEventListener('click', () => editTask(id));
        li.querySelector('.delete-task').addEventListener('click', () => deleteTask(id));

        tasksUl.appendChild(li);
    };

    // Add or update a task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(taskForm);
        const task = {
            id: editId || Date.now(),
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            dueDate: formData.get('dueDate')
        };

        if (editId) {
            tasks = tasks.map(t => t.id === editId ? task : t);
            editId = null;
        } else {
            tasks.push(task);
        }

        saveTasks();
        loadTasks();
        taskForm.reset();
    });

    // Edit a task
    const editTask = (id) => {
        const task = tasks.find(t => t.id === id);
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.description;
        document.getElementById('task-date').value = task.dueDate;
        editId = id;
    };

    // Delete a task
    const deleteTask = (id) => {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        loadTasks();
    };


    // // Cancel editing
    // cancelBtn.addEventListener('click', () => {
    //     taskForm.reset();
    //     editId = null;
    // });

    // Initialize app
    setDate();
    loadTasks();
});
