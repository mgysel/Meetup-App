// Constraint Validation
var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        //Possibly implement your own here.
    }, true);
}

// Toggle personal info
var togglePersonalInfo = function() {
	$(".optional-input").toggle();
};

// Start time must be before end time.
$("#end-time-input").keyup(function() {
	// Create Meetup Start/End Time Validation
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var startNum = parseInt(startTime.substr(0,2) + startTime.substr(3,4));
	var endNum = parseInt(endTime.substr(0,2) + endTime.substr(3,4));
	var timeVal = $(".time-validation");
	if ((startTime !== "" && endTime !== "") && (startNum > endNum) && (timeVal.css("display") == "none")) {
		timeVal.toggle();
		setTimeout(function() {
			timeVal.toggle();
		}, 2500);
	}
});

// Create Meetup Start/End Time Validation
$("#start-time-input").keyup(function() {
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	startNum = parseInt(startTime.substr(0,2) + startTime.substr(3,4));
	endNum = parseInt(endTime.substr(0,2) + endTime.substr(3,4));
	var timeVal = $(".time-validation");
	if ((startTime !== "" && endTime !== "") && (startNum > endNum) && (timeVal.css("display") == "none")) {
		timeVal.toggle();
		setTimeout(function() {
			timeVal.toggle();
		}, 2500);
	}
});

// Password Validation
// Useful variables
var password1 = $("#password1");
var password2 = $("#password2");
var passwordValidation = $(".password-validation");
// validation message on password 1 click
password1.click(function() {
	passwordValidation.css("margin-top","0");
	passwordValidation.toggle();
	setTimeout(function() {
		passwordValidation.toggle();
	}, 2500);
});
// validation message on password 1 keyup
password1.keyup(function() {
	var password1Val = password1.val();

	if (passwordValidation.css("display") == "none") {
		passwordValidation.css("margin-top","0");
		passwordValidation.toggle();
		setTimeout(function() {
			passwordValidation.toggle();
		}, 2500);
	}
	var passwordLength = password1Val.length;
	if (passwordLength>10 && passwordLength<35) {
		$("#password-length-check").html("&#10004");
		$("#password-length-check").css("color", "#4cbb17");
	}
	// lowercase letters
	if (/[a-z]/.test(password1Val) === true) {
		$("#lowercase-check").html("&#10004");
		$("#lowercase-check").css("color", "#4cbb17");
	}
	// Uppercase letters
	if (/[A-Z]/.test(password1Val) === true) {
		$("#uppercase-check").html("&#10004");
		$("#uppercase-check").css("color", "#4cbb17");
	}
	// Symbols
	if (/[!, @, #, $, %, ^, &, *]/.test(password1Val) === true) {
		$("#symbol-check").html("&#10004");
		$("#symbol-check").css("color", "#4cbb17");
	}
	// Numbers
	if (/[0,1,2,3,4,5,6,7,8,9]/.test(password1Val) === true) {
		$("#number-check").html("&#10004");
		$("#number-check").css("color", "#4cbb17");
	}
});
// validation message on password 2 click
password2.click(function() {
	passwordValidation.css("margin-top","61px");
	passwordValidation.toggle();
	setTimeout(function() {
		passwordValidation.toggle();
	}, 2500);
});
// validation message on password 2 keyup
password2.keyup(function() {
	if (passwordValidation.css("display") == "none") {
		passwordValidation.css("margin-top","61px");
		passwordValidation.toggle();
		setTimeout(function() {
			passwordValidation.toggle();
		}, 2500);
	}
	if (password1.val() == password2.val()) {
		$("#match-check").html("&#10004");
		$("#match-check").css("color", "#4cbb17");
	}
	if ($("#password-length-check").css("color")=="rgb(76, 187, 23)" && $("#uppercase-check").css("color")=="rgb(76, 187, 23)" && $("#lowercase-check").css("color")=="rgb(76, 187, 23)" && $("#number-check").css("color")=="rgb(76, 187, 23)" && $("#symbol-check").css("color")=="rgb(76, 187, 23)" && $("#match-check").css("color")=="rgb(76, 187, 23)") {
		$("#password-check").html("&#10004");
		$("#password-check").css("color", "#4cbb17");
	}
});

// Form validation when click sign up button
$("#sign-up-button").click(function() {
	var formValidation = $(".form-validation");
	var fullName = $("#fullname").val().length;
	var emailAddress = $("#email").val().length;
	if (fullName > 0) {
		$("#full-name-check").html("&#10004");
		$("#full-name-check").css("color", "#4cbb17");
	}

	// Email Validation
	var email = $("#email").val();
	if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === true) {
		$("#email-address-check").html("&#10004");
		$("#email-address-check").css("color", "#4cbb17");
	}

	if (fullName > 0 && emailAddress > 0 && $("#password-check").css("color") == "rgb(76, 187, 23)") {
		window.location.assign('home-page.html');
		return false;
	} else {
		formValidation.toggle();
		setTimeout(function() {
			formValidation.toggle();
		}, 2500);
	}
});

// Form completion validation on create meetup click.
$(".create-meetup-button").click(function() {
	var titleVal = $("#title-input").val();
	if (titleVal !== "") {
		$("#name-item").css("display", "none");
	}
	var descriptionVal = $("#description-input").val();
	if (descriptionVal !== "") {
		$("#description-item").css("display", "none");
	}
	var hostVal = $("#host-input").val();
	if (hostVal !== "") {
		$("#host-item").css("display", "none");
	}
	var guestVal = $("#guest-input").val();
	if (guestVal !== "") {
		$("#guest-item").css("display", "none");
	}
	var placeVal = $("#place-input").val();
	if (placeVal !== "") {
		$("#location-item").css("display", "none");
	}
	var dateVal = $("#date-input").val();
	if (dateVal !== "") {
		$("#date-item").css("display", "none");
	}
	var startTimeVal = $("#start-time-input").val();
	if (startTimeVal !== "") {
		$("#start-time-item").css("display", "none");
	}
	var endTimeVal = $("#end-time-input").val();
	if (endTimeVal !== "") {
		$("#end-time-item").css("display", "none");
	}
	if ((titleVal === "") || (descriptionVal==="") || (hostVal==="") || (guestVal==="") || (placeVal==="") || (dateVal==="") || (startTimeVal==="") || (endTimeVal==="")) {
		var formCompletionVal = $(".form-completion-validation");
		formCompletionVal.toggle();
		setTimeout(function() {
			formCompletionVal.toggle();
		}, 2500);
	} else {
		window.location.assign('home-page.html');
		return false;
	}
});