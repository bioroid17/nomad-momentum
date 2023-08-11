const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");

const todos = [];

function saveToDos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
}

function paintToDo(newToDo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newToDo;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	todos.push(newToDo);
	paintToDo(newToDo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
