const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function showToDoForm() {
	document.querySelector("#todo-form").classList.remove("hidden");
}

function onLoginSubmit(event) {
	event.preventDefault();
	const inputUsername = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, inputUsername);
	paintGreetings(inputUsername);
	showToDoForm();
}

function paintGreetings(username) {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	// form을 보여준다.
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// greeting을 보여준다.
	paintGreetings(savedUsername);
	showToDoForm();
}
