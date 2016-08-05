/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */

// var secondPasswordInput = document.querySelector('#second');
// console.log(secondPasswordInput);
// var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */
submit.onclick = function (firstPasswordInput, secondPasswordInput) {
	var firstPasswordInput = document.querySelector('#first').value;
	var secondPasswordInput = document.querySelector('#second').value;
	// console.log(firstPasswordInput);
	// console.log(secondPasswordInput);

	// Short passwords
	var shortChar = "";
	var longChar = "";
	if (firstPasswordInput.length<16) {
		shortChar = '16 characters ';
	};

	// Long Passwords
	if (firstPasswordInput.length>100) {
		longChar = '100 characters ';
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
		symbols = 'symbol ';
		// console.log(symbols);
	};
	// Numbers
	if (countNumbers==0) {
		numbers = 'number ';
		// console.log(numbers);
	};

	// Uppercase letters
	var upperCase = "";
	if (/[A-Z]/.test(firstPasswordInput) == true) {
		upperCase = 'uppercase ';
	};
	// lowercase letters
	var lowerCase = "";
	if (/[a-z]/.test(firstPasswordInput) == true) {
		lowerCase = 'lowercase ';
	};
	// Match
	var match = "";
	if (firstPasswordInput != secondPasswordInput) {
		match = 'match ';
	}
	var alerts = shortChar+longChar+symbols+numbers+upperCase+lowerCase+match;
	if (alerts.length>0) {
		console.log(alerts);
	};
	document.querySelector('#first').setCustomValidity(alerts);
	// illegal characters
	// var illegal = "";
	// if (preg_match('/[^A-Za-z0-9.#\\-$]/',firstPasswordInput) == true) {
	// 	illegal = "illegal";
	// };


			// console.log(countSymbols)
		// };
		// if (countSymbols == 0) {
		// 	console.log('symbol');
		// }

		// if(isNan(firstPasswordInput.length[i])==false)
	// }
};