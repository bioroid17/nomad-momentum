const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick() {
	const username = loginInput.value;
	console.log(username);
}

loginButton.addEventListener("click", onLoginButtonClick);
