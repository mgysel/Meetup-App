// Start time must be before end time - End Time Input.
$("#end-time-input").keyup(function() {
	// Create Meetup Start/End Time Validation
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var timeVal = $("#time-validation-start");
	if (startTime !== "" && endTime !== "" && startTime >= endTime && timeVal.css("display") == "none") {
		timeVal.css("display","block");
	} else if (endTime > startTime) {
		timeVal.css("display","none");
	}
});

// Start time must be before end time - Start Time Input.
$("#start-time-input").keyup(function() {
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var timeVal = $("#time-validation-start");
	if (startTime !== "" && endTime !== "" && startTime > endTime && timeVal.css("display") == "none") {
		timeVal.css("display","block");
	} else if (endTime > startTime) {
		timeVal.css("display","none");
	}
});

// REQUIRED FIELD VALIDATION
// Title
var titleInput = $("#title-input");
var titleValidation = $("#title-validation");
titleInput.focusout(function() {
	if (titleInput.val() === "") {
		titleValidation.css("display","block");
	} else {
		titleValidation.css("display","none");
	}
});
// Description
var descriptionInput = $("#description-input");
var descriptionValidation = $("#description-validation");
descriptionInput.focusout(function() {
	if (descriptionInput.val() === "") {
		descriptionValidation.css("display","block");
	} else {
		descriptionValidation.css("display","none");
	}
});
// Host
var hostInput = $("#host-input");
var hostValidation = $("#host-validation");
hostInput.focusout(function() {
	if (hostInput.val() === "") {
		hostValidation.css("display","block");
	} else {
		hostValidation.css("display","none");
	}
});
// Guest
var guestInput = $("#guest-input");
var guestValidation = $("#guest-validation");
guestInput.focusout(function() {
	if (guestInput.val() === "") {
		guestValidation.css("display","block");
	} else {
		guestValidation.css("display","none");
	}
});
var placeInput = $("#place-input");
var placeValidation = $("#place-validation");
placeInput.focusout(function() {
	if (placeInput.val() === "") {
		placeValidation.css("display","block");
	} else {
		placeValidation.css("display","none");
	}
});
var startTimeInput = $("#start-time-input");
var startTimeValidation = $("#time-validation-empty");
startTimeInput.focusout(function() {
	if (startTimeInput.val() === "") {
		startTimeValidation.css("display","block");
	} else {
		startTimeValidation.css("display","none");
	}
});
var endTimeInput = $("#end-time-input");
var endTimeValidation = $("#time-validation-empty");
endTimeInput.focusout(function() {
	if (endTimeInput.val() === "") {
		endTimeValidation.css("display","block");
	} else {
		endTimeValidation.css("display","none");
	}
});

// Form completion validation on create meetup click.
$(".create-meetup-button").click(function() {
	if ((titleValidation.css("display") === "none") && (descriptionValidation.css("display") ==="none") && (hostValidation.css("display") === "none") && (guestValidation.css("display") === "none") && (placeValidation.css("display") === "none") && ($("#time-validation-empty").css("display") === "none") && ($("#time-validation-start").css("display") === "none")) {
		window.location.assign('home-page.html');
 		return false;
	} else {
		// $("#total-validation").css("display","block");
		if (titleInput.val() === "") {
			titleValidation.css("display","block");
		}
		if (descriptionInput.val() === "") {
			descriptionValidation.css("display","block");
		}
		if (hostInput.val() === "") {
			hostValidation.css("display","block");
		}
		if (guestInput.val() === "") {
			guestValidation.css("display","block");
		}
		if (placeInput.val() === "") {
			placeValidation.css("display","block");
		}
		if (startTimeInput.val() === "") {
			startTimeValidation.css("display","block");
		}
		if (endTimeInput.val() === "") {
			endTimeValidation.css("display","block");
		}
	}
});