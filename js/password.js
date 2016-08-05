var submit = document.getElementById('submit');

submit.onclick = function (firstPasswordInput, secondPasswordInput) {
	var firstPasswordInput = document.querySelector('#first-password').value;
	var secondPasswordInput = document.querySelector('#second-password').value;

	// Short passwords
	var shortChar = "";
	var longChar = "";
	var passwordLength = firstPasswordInput.length;
	if (passwordLength<16) {
		shortChar = 'fewer than 16 characters\n';
	};

	// Long Passwords
	if (firstPasswordInput.length>35) {
		longChar = 'greater than 35 characters\n';
	};

	// Symbols, Numbers
	for (var i=0; i<firstPasswordInput.length; i++) {
		var symbols = "";
		var numbers = "";
		var countSymbols = 0;
		var countNumbers = 0;
		// Symbols
		if (firstPasswordInput[i] == "!" || firstPasswordInput[i] == "@" || firstPasswordInput[i] == "#" || firstPasswordInput[i] == "$" || firstPasswordInput[i] == "%" || firstPasswordInput[i] == "^" || firstPasswordInput[i] == "*") {
			countSymbols += 1;
		};
	};
	// Symbols
	if (countSymbols==0) {
		symbols = 'missing a symbol (!, @, #, $, %, ^, &, *)\n';
	};
	// Numbers
	if (countNumbers==0) {
		numbers = 'missing a number\n';
		// console.log(numbers);
	};

	// Uppercase letters
	var upperCase = "";
	if (/[A-Z]/.test(firstPasswordInput) == true) {
		upperCase = 'missing an uppercase letter\n';
	};
	// lowercase letters
	var lowerCase = "";
	if (/[a-z]/.test(firstPasswordInput) == true) {
		lowerCase = 'missing a lowercase letter\n';
	};
	// Match
	var match = "";
	if (firstPasswordInput != secondPasswordInput) {
		match = 'passwords must match ';
	}
	var alerts1 = "Please correct the following issues:\n" + shortChar + longChar + symbols + numbers + upperCase + lowerCase;
	var alerts2 = "Please correct the following issues:\n" + match;

	document.getElementById('first-password').setCustomValidity(alerts1);
	document.getElementById('second-password').setCustomValidity(alerts2);
};