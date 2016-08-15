// Submit button
var submit = document.getElementById('sign-up-button');

submit.onclick = function() {
	// Useful variables
	var email = document.querySelector('#email').value;
	var firstPassword = document.querySelector('#first-password');
	var secondPassword = document.querySelector('#second-password');
	var firstPasswordInput = firstPassword.value;
	var secondPasswordInput = secondPassword.value;

	// Short passwords
	var shortChar = "";
	var longChar = "";
	var passwordLength = firstPasswordInput.length;
	if (passwordLength<10) {
		shortChar = 'fewer than 10 characters\n';
	}

	// Long Passwords
	if (passwordLength>35) {
		longChar = 'greater than 35 characters\n';
	}

	// Symbols
	var symbols = "";
	if (/[!, @, #, $, %, ^, &, *]/.test(firstPasswordInput) === false) {
		symbols = 'missing a symbol (!, @, #, $, %, ^, &, *)\n';
	}
	// Numbers
	var numbers = "";
	if (/[0,1,2,3,4,5,6,7,8,9]/.test(firstPasswordInput) === false) {
		numbers = 'missing a number\n';
	}

	// Uppercase letters
	var upperCase = "";
	if (/[A-Z]/.test(firstPasswordInput) === false) {
		upperCase = 'missing an uppercase letter\n';
	}
	// lowercase letters
	var lowerCase = "";
	if (/[a-z]/.test(firstPasswordInput) === false) {
		lowerCase = 'missing a lowercase letter\n';
	}
	// Match
	var match = "";
	if (firstPasswordInput != secondPasswordInput) {
		match = 'passwords must match ';
	}
	var alerts1 = shortChar + longChar + symbols + numbers + upperCase + lowerCase;
	var alerts2 = match;

	if (alerts1.length > 0) {
		firstPassword.setCustomValidity("Please correct the following issues:\n" + alerts1);
	} else if (match.length > 0) {
		firstPassword.setCustomValidity("");
		secondPassword.setCustomValidity("Please correct the following issues:\n" + alerts2);
	} else {
		secondPassword.setCustomValidity("");
		window.location.assign('sign-up.html');
		alert("password good");
	}
};