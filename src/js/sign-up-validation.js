// Constraint Validation
var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        //Possibly implement your own here.
    }, true);
}

// Toggle personal info
$("#optional-info-button").click(function() {
	$(".optional-input").toggle();
});

// FOCUS OUT VALIDATION
// Full Name Validation
$("#fullname").focusout(function() {
	var fullName = $("#fullname");
	var fullNameLen = fullName.val().length;
	if (fullNameLen === 0) {
		fullName.css("border", "3px solid #cc0000");
		fullName.css("border-style", "");
		fullName.attr("placeholder", "*Full Name Required");
	} else {
		fullName.css("border-style", "");
		fullName.css("border-width", "");
		fullName.css("border-color", "");
		fullName.attr("placeholder", "");
	}
});
// email
$("#email").focusout(function() {
	var email = $("#email");
	var emailLen = email.val().length;
	if (emailLen === 0) {
		email.css("border", "3px solid #cc0000");
		email.css("border-style", "");
		email.attr("placeholder", "*Email Address Required");
	} else {
		email.css("border-style", "");
		email.css("border-width", "");
		email.css("border-color", "");
		email.attr("placeholder", "");
	}
});
// password 1
$("#password1").focusout(function() {
	var password1 = $("#password1");
	var password1Len = password1.val().length;
	if (password1Len === 0) {
		password1.css("border", "3px solid #cc0000");
		password1.css("border-style", "");
		password1.attr("placeholder", "*Valid Password Required");
	} else {
		password1.css("border-style", "");
		password1.css("border-width", "");
		password1.css("border-color", "");
		password1.attr("placeholder", "");
	}
});
// password 2
$("#password2").focusout(function() {
	var password2 = $("#password2");
	var password2Len = password1.val().length;
	if (password2Len === 0) {
		password2.css("border", "3px solid #cc0000");
		password2.css("border-style", "");
		password2.attr("placeholder", "*Valid Password Required");
	} else {
		password2.css("border-style", "");
		password2.css("border-width", "");
		password2.css("border-color", "");
		password2.attr("placeholder", "");
	}
});

// Email Validation
var email = $("#email");
email.keyup(function() {
	// Useful variables
	var atCheck = $("#at-check");
	var userCheck = $("#username-check");
	var domainCheck = $("#domain-check");
	var emailVal = email.val();
	if (emailVal.indexOf("@") > -1) {
		atCheck.html("&#10004");
		atCheck.css("color", "#4cbb17");
	} else {
		atCheck.html("&#10006;");
		atCheck.css("color", "#cc0000");
	}
	if (emailVal.indexOf("@") > 0) {
		userCheck.html("&#10004");
		userCheck.css("color", "#4cbb17");
	} else {
		userCheck.html("&#10006;");
		userCheck.css("color", "#cc0000");
	}
	if ((emailVal.indexOf("@") > -1) && (emailVal.indexOf("@") < (emailVal.length - 1))) {
		domainCheck.html("&#10004");
		domainCheck.css("color", "#4cbb17");
	} else {
		domainCheck.html("&#10006;");
		domainCheck.css("color", "#cc0000");
	}
	if ((atCheck.css("color") =="rgb(76, 187, 23)") && (userCheck.css("color") =="rgb(76, 187, 23)") && (domainCheck.css("color")=="rgb(76, 187, 23)")) {
		email.css("border-style", "");
		email.css("border-width", "");
		email.css("border-color", "");
		email.attr("placeholder", "");
	}
});

// Email Validation on click
var emailValidation = $(".email-validation");
email.click(function() {
	if (emailValidation.css("display") =="none") {
		emailValidation.toggle();
	}
});

// Password Validation
// Useful variables
var password1 = $("#password1");
var password2 = $("#password2");
var passwordValidation = $(".password-validation");
// validation message on password 1 click
password1.click(function() {
	if (passwordValidation.css("display") =="none") {
		passwordValidation.toggle();
	}
});
// validation message on password 2 click
password2.click(function() {
	if (passwordValidation.css("display") =="none") {
		passwordValidation.toggle();
	}
});
// validation message on password 1 keyup
password1.keyup(function() {
	var password1Val = password1.val();
	var passwordLength = password1Val.length;
	var passwordLenCheck = $("#password-length-check");
	if (passwordLength>10 && passwordLength<35) {
		passwordLenCheck.html("&#10004;");
		passwordLenCheck.css("color", "#4cbb17");
	} else {
		passwordLenCheck.html("&#10006;");
		passwordLenCheck.css("color", "#cc0000");
	}
	// lowercase letters
	var lowercaseCheck = $("#lowercase-check");
	if (/[a-z]/.test(password1Val) === true) {
		lowercaseCheck.html("&#10004;");
		lowercaseCheck.css("color", "#4cbb17");
	} else {
		lowercaseCheck.html("&#10006;");
		lowercaseCheck.css("color", "#cc0000");
	}
	// Uppercase letters
	var uppercaseCheck = $("#uppercase-check");
	if (/[A-Z]/.test(password1Val) === true) {
		uppercaseCheck.html("&#10004;");
		uppercaseCheck.css("color", "#4cbb17");
	} else {
		uppercaseCheck.html("&#10006;");
		uppercaseCheck.css("color", "#cc0000");
	}
	// Symbols
	var symbolCheck = $("#symbol-check");
	if (/[!, @, #, $, %, ^, &, *]/.test(password1Val) === true) {
		symbolCheck.html("&#10004;");
		symbolCheck.css("color", "#4cbb17");
	} else {
		symbolCheck.html("&#10006;");
		symbolCheck.css("color", "#cc0000");
	}
	// Numbers
	var numberCheck = $("#number-check");
	if (/[0,1,2,3,4,5,6,7,8,9]/.test(password1Val) === true) {
		numberCheck.html("&#10004;");
		numberCheck.css("color", "#4cbb17");
	} else {
		numberCheck.html("&#10006;");
		numberCheck.css("color", "#cc0000");
	}
	if (passwordLenCheck.css("color") == "rgb(76, 187, 23)" && lowercaseCheck.css("color") == "rgb(76, 187, 23)" && uppercaseCheck.css("color") == "rgb(76, 187, 23)" && symbolCheck.css("color") == "rgb(76, 187, 23)" && numberCheck.css("color") == "rgb(76, 187, 23)" && password1.val()==password2.val()) {
		passwordValidation.css("display","none");
	} else {
		passwordValidation.css("display", "block");
	}
});

// validation message on password 2 keyup
password2.keyup(function() {
	if (passwordValidation.css("display") == "none") {
		passwordValidation.css("margin-top","61px");
		passwordValidation.toggle();
		setTimeout(function() {
			passwordValidation.toggle();
		}, 1000);
	}
	if (password1.val() == password2.val()) {
		$("#match-check").html("&#10004");
		$("#match-check").css("color", "#4cbb17");
	}
	if ($("#password-length-check").css("color")=="rgb(76, 187, 23)" && $("#uppercase-check").css("color")=="rgb(76, 187, 23)" && $("#lowercase-check").css("color")=="rgb(76, 187, 23)" && $("#number-check").css("color")=="rgb(76, 187, 23)" && $("#symbol-check").css("color")=="rgb(76, 187, 23)" && $("#match-check").css("color")=="rgb(76, 187, 23)") {
		$("#password-check").html("&#10004");
		$("#password-check").css("color", "#4cbb17");
	}
	var passwordLenCheck = $("#password-length-check");
	var lowercaseCheck = $("#lowercase-check");
	var uppercaseCheck = $("#uppercase-check");
	var symbolCheck = $("#symbol-check");
	var numberCheck = $("#number-check");
	if (passwordLenCheck.css("color") == "rgb(76, 187, 23)" && lowercaseCheck.css("color") == "rgb(76, 187, 23)" && uppercaseCheck.css("color") == "rgb(76, 187, 23)" && symbolCheck.css("color") == "rgb(76, 187, 23)" && numberCheck.css("color") == "rgb(76, 187, 23)" && password1.val()==password2.val()) {
		passwordValidation.css("display","none");
	} else {
		passwordValidation.css("display","block");
	}
});

// Form validation when click sign up button
$("#sign-up-button").click(function() {
	var fullName = $("#fullname");
	var fullNameLen = fullName.val().length;
	if (fullNameLen === 0) {
		fullName.css("border", "3px solid #cc0000");
		fullName.css("border-style", "");
		fullName.attr("placeholder", "*Full Name Required");
	} else {
		fullName.css("border-style", "");
		fullName.css("border-width", "");
		fullName.css("border-color", "");
		fullName.attr("placeholder", "");
	}

	// Email Validation
	var email = $("#email");
	if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.val()) === false) {
		email.css("border", "3px solid #cc0000");
		email.css("border-style", "");
		email.attr("placeholder", "*Valid Email Required");
	} else {
		email.css("border-style", "");
		email.css("border-width", "");
		email.css("border-color", "");
		email.attr("placeholder", "");
	}

	// Check password validity
	var passwordLenCheck = $("#password-length-check");
	var lowercaseCheck = $("#lowercase-check");
	var uppercaseCheck = $("#uppercase-check");
	var symbolCheck = $("#symbol-check");
	var numberCheck = $("#number-check");
	var password1 = $("#password1");
	var password2 = $("#password2");
	if (passwordLenCheck.css("color") != "rgb(76, 187, 23)" || lowercaseCheck.css("color") != "rgb(76, 187, 23)" || uppercaseCheck.css("color") != "rgb(76, 187, 23)" || symbolCheck.css("color") != "rgb(76, 187, 23)" || numberCheck.css("color") != "rgb(76, 187, 23)" || password1.val()!=password2.val()) {
		password1.css("border", "3px solid #cc0000");
		password1.css("border-style", "");
		password1.attr("placeholder", "*Valid Password Required");
		password2.css("border", "3px solid #cc0000");
		password2.css("border-style", "");
		password2.attr("placeholder", "*Valid Password Required");
	} else {
		password1.css("border-style", "");
		password1.css("border-width", "");
		password1.css("border-color", "");
		password1.attr("placeholder", "");
		password2.css("border-style", "");
		password2.css("border-width", "");
		password2.css("border-color", "");
		password2.attr("placeholder", "");
	}
	if (passwordLenCheck.css("color") == "rgb(76, 187, 23)" && lowercaseCheck.css("color") == "rgb(76, 187, 23)" && uppercaseCheck.css("color") == "rgb(76, 187, 23)" && symbolCheck.css("color") == "rgb(76, 187, 23)" && numberCheck.css("color") == "rgb(76, 187, 23)" && password1.val()==password2.val() && fullNameLen>0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.val()) === true) {
		window.location.assign('home-page.html');
		return false;
	}
});