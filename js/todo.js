const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");

function paintToDo(newToDo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	li.appendChild(span);
	span.innerText = newToDo;
	toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
