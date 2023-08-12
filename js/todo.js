const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
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

function sayHello(item) {
	console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
	const parsedToDos = JSON.parse(savedToDos);
	todos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
