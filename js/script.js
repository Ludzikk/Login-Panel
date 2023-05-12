const loginInput = document.querySelector(".login");
const passwordInput = document.querySelector(".password");
const loginError = document.querySelector(".login-error");
const passwordError = document.querySelector(".password-error");
const accountCreated = document.querySelector(".created");
const btn = document.querySelector("button");

const checkIfCanMakeAccount = () => {
	clearErrors();

	accountCreated.textContent = "";
	if (loginInput.value.length > 3 && passwordInput.value.length > 8) {
		if (!passwordInput.value.match(/[A-Z]/)) {
			passwordError.textContent = "Password must have one big letter";
		} else if (
			passwordInput.value.match(/[A-Z]/) &&
			!passwordInput.value.match(/[a-z]/)
		) {
			passwordError.textContent = "Password must have one small letter";
		} else if (
			passwordInput.value.match(/[A-Z]/) &&
			passwordInput.value.match(/[a-z]/) &&
			!passwordInput.value.match(/[0-9]/)
		) {
			passwordError.textContent = "Password must have one number";
		} else if (
			passwordInput.value.match(/[A-Z]/) &&
			passwordInput.value.match(/[a-z]/) &&
			passwordInput.value.match(/[0-9]/) && 
			!passwordInput.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
		) {
			passwordError.textContent = "Password must have one special character";
		} else {
			accountCreated.textContent = "Account created";
		}
	} else if (loginInput.value.length <= 3 && passwordInput.value.length <= 8) {
		loginError.textContent = "Login must be longer than 3 characters";
		passwordError.textContent = "Password must be longer than 8 characters";
	} else if (loginInput.value.length > 3 && passwordInput.value.length <= 8) {
		passwordError.textContent = "Password must be longer than 8 characters";
	} else if (loginInput.value.length <= 3 && passwordInput.value.length > 8) {
		loginError.textContent = "Login must be longer than 3 characters";
	}
};

const checkIfInputsAreFilled = () => {
	if (loginInput.value !== "" && passwordInput.value !== "") {
		checkIfCanMakeAccount();
	} else if (loginInput.value !== "" && passwordInput.value === "") {
		passwordError.textContent = "You need to fill up password";
	} else if (loginInput.value === "" && passwordInput.value !== "") {
		loginError.textContent = "You need to fill up login";
	} else {
		passwordError.textContent = "You need to fill up password";
		loginError.textContent = "You need to fill up login";
	}
};

const clearErrors = () => {
	passwordError.textContent = "";
	loginError.textContent = "";
};

btn.addEventListener("click", checkIfInputsAreFilled);
