var submit = document.getElementById('sign-up-button');

submit.onclick = function (firstPasswordInput, secondPasswordInput) {
	var firstPasswordInput = document.querySelector('#first-password').value;
	var secondPasswordInput = document.querySelector('#second-password').value;

	// Short passwords
	var shortChar = "";
	var longChar = "";
	var passwordLength = firstPasswordInput.length;
	if (passwordLength<10) {
		shortChar = 'fewer than 10 characters\n';
	};

	// Long Passwords
	if (passwordLength>35) {
		longChar = 'greater than 35 characters\n';
	};

	// Symbols
	var symbols = "";
	if (/[!, @, #, $, %, ^, &, *]/.test(firstPasswordInput) == false) {
		symbols = 'missing a symbol (!, @, #, $, %, ^, &, *)\n';
	};
	// Numbers
	var numbers = "";
	if (/[0,1,2,3,4,5,6,7,8,9]/.test(firstPasswordInput) == false) {
		numbers = 'missing a number\n';
	};

	// Uppercase letters
	var upperCase = "";
	if (/[A-Z]/.test(firstPasswordInput) == false) {
		upperCase = 'missing an uppercase letter\n';
	};
	// lowercase letters
	var lowerCase = "";
	if (/[a-z]/.test(firstPasswordInput) == false) {
		lowerCase = 'missing a lowercase letter\n';
	};
	// Match
	var match = "";
	if (firstPasswordInput != secondPasswordInput) {
		match = 'passwords must match ';
	};
	var alerts1 = "Please correct the following issues:\n" + shortChar + longChar + symbols + numbers + upperCase + lowerCase;
	var alerts2 = "Please correct the following issues:\n" + match;
	// console.log("alerts 1: " + alerts1);
	// console.log("alerts 2: " + alerts2);
	// console.log("symbols: " + symbols);
	// console.log("numbers: " + numbers);
	// console.log("uppercase: " + upperCase);
	// console.log("lowercase: " + lowerCase.length);
	// console.log("countsymbols: " + countSymbols);

	if (shortChar.length > 0 || longChar.length > 0 || symbols.length > 0 || numbers.length > 0 || upperCase.length > 0 || lowerCase.length > 0) {
		console.log("alerts 1: " + alerts1);
		document.getElementById('first-password').setCustomValidity(alerts1);
		document.getElementById('first-password').checkValidity();
	} else if (match.length > 0) {
		document.getElementById('second-password').setCustomValidity(alerts2);
		console.log("alerts 2: " + alerts2);
	} else {
		window.location = "sign-up.html"
	};
};