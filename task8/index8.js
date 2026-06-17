const taskinput = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const tasklist = document.getElementById("taskList");

btn.addEventListener("click", function () {

    let li = document.createElement("li");

    li.innerText = taskinput.value;

    tasklist.appendChild(li);

});