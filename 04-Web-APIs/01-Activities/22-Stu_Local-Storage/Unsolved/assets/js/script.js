var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

renderLastRegistered();

function displayMessage(type, message) {
	msgDiv.textContent = message;
	msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
	console.log('local storage= ', localStorage);
	// TODO: Retrieve the last email and password and render it to the page
	// the instructions say to do this "if it exists" but that is unnecessary because this code will only run if it exists
	// if there is no email value in local storage, display message
	// if (localStorage.getItem('email') === null) {
	// 	msgDiv.textContent = 'There is no user registered';
	// } else {
	// else display the las registered user
	userEmailSpan.textContent = localStorage.getItem('email');
	userPasswordSpan.textContent = localStorage.getItem('password');
	// }
}

signUpButton.addEventListener('click', function (event) {
	event.preventDefault();

	var email = document.querySelector('#email').value;
	var password = document.querySelector('#password').value;

	if (email === '') {
		displayMessage('error', 'Email cannot be blank');
	} else if (password === '') {
		displayMessage('error', 'Password cannot be blank');
	} else {
		displayMessage('success', 'Registered successfully');

		// TODO: Save email and password to localStorage and render the last registered user
		localStorage.setItem('email', email);
		localStorage.setItem('password', password);
		renderLastRegistered();
	}
});
