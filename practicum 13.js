
// GET HTML ELEMENTS

const taskForm = document.getElementById("taskForm");

const taskTitle = document.getElementById("taskTitle");

const taskDescription = document.getElementById("taskDescription");

const taskPriority = document.getElementById("taskPriority");

const taskStatus = document.getElementById("taskStatus");

const taskTable = document.getElementById("taskTable");

const message = document.getElementById("message");

const editIndex = document.getElementById("editIndex");

const submitBtn = document.getElementById("submitBtn");

const searchTask = document.getElementById("searchTask");


// LOAD TASKS FROM LOCAL STORAGE

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// SAVE TASKS

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// DISPLAY TASKS

function displayTasks(list = tasks) {

    taskTable.innerHTML = "";

    list.forEach(function(task) {

        const row = document.createElement("tr");

        const titleCell = document.createElement("td");

        const descriptionCell = document.createElement("td");

        const priorityCell = document.createElement("td");

        const statusCell = document.createElement("td");

        const actionCell = document.createElement("td");

        titleCell.textContent = task.title;

        descriptionCell.textContent = task.description;

        priorityCell.textContent = task.priority;

        statusCell.textContent = task.status;

        // EDIT BUTTON

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-btn";

        editButton.addEventListener("click", function() {

            editTask(tasks.indexOf(task));

        });

        // DELETE BUTTON

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {

            deleteTask(tasks.indexOf(task));

        });

        actionCell.appendChild(editButton);

        actionCell.appendChild(deleteButton);

        row.appendChild(titleCell);

        row.appendChild(descriptionCell);

        row.appendChild(priorityCell);

        row.appendChild(statusCell);

        row.appendChild(actionCell);

        taskTable.appendChild(row);

    });

}


// CREATE AND UPDATE TASKS

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const task = {

        title: taskTitle.value,

        description: taskDescription.value,

        priority: taskPriority.value,

        status: taskStatus.value

    };

    if (editIndex.value === "") {

        // CREATE TASK

        tasks.push(task);

        message.textContent = "Task added successfully!";

    } else {

        // UPDATE TASK

        tasks[Number(editIndex.value)] = task;

        message.textContent = "Task updated successfully!";

    }

    saveTasks();

    displayTasks();

    taskForm.reset();

    editIndex.value = "";

    submitBtn.textContent = "Add Task";

});


// EDIT TASK

function editTask(index) {

    const task = tasks[index];

    taskTitle.value = task.title;

    taskDescription.value = task.description;

    taskPriority.value = task.priority;

    taskStatus.value = task.status;

    editIndex.value = index;

    submitBtn.textContent = "Update Task";

    message.textContent = "Editing selected task.";

    document.getElementById("add-task").scrollIntoView();

}


// DELETE TASK

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

    message.textContent = "Task deleted successfully!";

}


// SEARCH TASKS

searchTask.addEventListener("input", function() {

    const searchValue = searchTask.value.toLowerCase();

    const filteredTasks = tasks.filter(function(task) {

        return task.title.toLowerCase().includes(searchValue);

    });

    displayTasks(filteredTasks);

});


// DISPLAY SAVED TASKS WHEN PAGE LOADS

displayTasks();
