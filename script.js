const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}