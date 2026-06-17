const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    let li = document.createElement("li");

    li.innerText = taskInput.value;

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("deleteBtn");

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

});