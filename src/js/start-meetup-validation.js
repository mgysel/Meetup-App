// Constraint Validation
var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        //Possibly implement your own here.
    }, true);
}

// Start time must be before end time - End Time Input.
$("#end-time-input").keyup(function() {
	// Create Meetup Start/End Time Validation
	var startDate = $("#start-date-input").val();
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var endDate = $("#end-date-input").val();
	var startTimeNum = parseInt(startTime.substr(0,2) + startTime.substr(3,4));
	var startDateNum = parseInt(startDate.substr(0,4) + startDate.substr(5,2) + startDate.substr(8,2));
	var endTimeNum = parseInt(endTime.substr(0,2) + endTime.substr(3,4));
	var endDateNum = parseInt(endDate.substr(0,4) + endDate.substr(5,2) + endDate.substr(8,2));
	var timeVal = $(".time-validation");
	if (startTime !== "" && startDate !== "" && endTime !== "" && endDate !== "" && startDateNum + startTimeNum > endDateNum + endTimeNum && timeVal.css("display") == "none") {
		timeVal.toggle();
		setTimeout(function() {
			timeVal.toggle();
		}, 2500);
	}
});

// Start time must be before end time - Start Time Input.
$("#start-time-input").keyup(function() {
	var startDate = $("#start-date-input");
	var startTime = $("#start-time-input");
	var endTime = $("#end-time-input");
	var endDate = $("#end-date-input");
	var startDateVal = startDate.val();
	var startTimeVal = startTime.val();
	var endTimeVal = endTime.val();
	var endDateVal = endDate.val();
	var startTimeNum = parseInt(startTimeVal.substr(0,2) + startTimeVal.substr(3,4));
	var startDateNum = parseInt(startDateVal.substr(0,4) + startDateVal.substr(5,2) + startDateVal.substr(8,2));
	var endTimeNum = parseInt(endTimeVal.substr(0,2) + endTimeVal.substr(3,4));
	var endDateNum = parseInt(endDateVal.substr(0,4) + endDateVal.substr(5,2) + endDateVal.substr(8,2));
	var timeVal = $(".time-validation");
	if (startTime !== "" && startDate !== "" && endTime !== "" && endDate !== "" && startDateNum + startTimeNum > endDateNum + endTimeNum && timeVal.css("display") == "none") {
		timeVal.css("display","block");
	} else {
		timeVal.css("display","none");
	}
});

// Start time must be before end time - Start Date Input.
$("#start-date-input").keyup(function() {
	var startDate = $("#start-date-input").val();
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var endDate = $("#end-date-input").val();
	var startTimeNum = parseInt(startTime.substr(0,2) + startTime.substr(3,4));
	var startDateNum = parseInt(startDate.substr(0,4) + startDate.substr(5,2) + startDate.substr(8,2));
	var endTimeNum = parseInt(endTime.substr(0,2) + endTime.substr(3,4));
	var endDateNum = parseInt(endDate.substr(0,4) + endDate.substr(5,2) + endDate.substr(8,2));
	var timeVal = $(".time-validation");
	if (startTime !== "" && startDate !== "" && endTime !== "" && endDate !== "" && startDateNum + startTimeNum > endDateNum + endTimeNum && timeVal.css("display") == "none") {
		timeVal.css("display","block");
	} else {
		timeVal.css("display","none");
	}
});

// Start time must be before end time - End Date Input.
$("#end-date-input").keyup(function() {
	var startDate = $("#start-date-input").val();
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var endDate = $("#end-date-input").val();
	var startTimeNum = parseInt(startTime.substr(0,2) + startTime.substr(3,4));
	var startDateNum = parseInt(startDate.substr(0,4) + startDate.substr(5,2) + startDate.substr(8,2));
	var endTimeNum = parseInt(endTime.substr(0,2) + endTime.substr(3,4));
	var endDateNum = parseInt(endDate.substr(0,4) + endDate.substr(5,2) + endDate.substr(8,2));
	var timeVal = $(".time-validation");
	if (startTime !== "" && startDate !== "" && endTime !== "" && endDate !== "" && startDateNum + startTimeNum > endDateNum + endTimeNum && timeVal.css("display") == "none") {
		timeVal.css("display","block");
	} else {
		timeVal.css("display","none");
	}
});

// Form completion validation on create meetup click.
$(".create-meetup-button").click(function() {
	var title = $("#title-input");
	var titleVal = title.val();
	if (titleVal === "") {
		title.css("border", "3px solid #cc0000");
		title.css("border-style", "");
		title.attr("placeholder", "*Event Name Required");
	} else {
		title.css("border-style", "");
		title.css("border-width", "");
		title.css("border-color", "");
		title.attr("placeholder", "");
	}
	var description = $("#description-input");
	var descriptionVal = description.val();
	if (descriptionVal === "") {
		description.css("border", "3px solid #cc0000");
		description.css("border-style", "");
		description.attr("placeholder", "*Description Required");
	} else {
		description.css("border-style", "");
		description.css("border-width", "");
		description.css("border-color", "");
		description.attr("placeholder", "");
	}
	var host = $("#host-input");
	var hostVal = host.val();
	if (hostVal === "") {
		host.css("border", "3px solid #cc0000");
		host.css("border-style", "");
		host.attr("placeholder", "*Host(s) Required");
	} else {
		host.css("border-style", "");
		host.css("border-width", "");
		host.css("border-color", "");
		host.attr("placeholder", "");
	}
	var guest = $("#guest-input");
	var guestVal = guest.val();
	if (guestVal === "") {
		guest.css("border", "3px solid #cc0000");
		guest.css("border-style", "");
		guest.attr("placeholder", "*Guest(s) Required");
	} else {
		guest.css("border-style", "");
		guest.css("border-width", "");
		guest.css("border-color", "");
		guest.attr("placeholder", "");
	}
	var place = $("#place-input");
	var placeVal = place.val();
	if (placeVal === "") {
		place.css("border", "3px solid #cc0000");
		place.css("border-style", "");
		place.attr("placeholder", "*Location Required");
	} else {
		place.css("border-style", "");
		place.css("border-width", "");
		place.css("border-color", "");
		place.attr("placeholder", "");
	}
	var startDate = $("#start-date-input");
	var startDateVal = startDate.val();
	if (startDateVal === "") {
		startDate.css("border", "3px solid #cc0000");
		startDate.css("border-style", "");
		startDate.attr("placeholder", "*Start Date Required");
	} else {
		startDate.css("border-style", "");
		startDate.css("border-width", "");
		startDate.css("border-color", "");
		startDate.attr("placeholder", "");
	}
	var endDate = $("#end-date-input");
	var endDateVal = endDate.val();
	if (endDateVal === "") {
		endDate.css("border", "3px solid #cc0000");
		endDate.css("border-style", "");
		endDate.attr("placeholder", "*End Date Required");
	} else {
		endDate.css("border-style", "");
		endDate.css("border-width", "");
		endDate.css("border-color", "");
		endDate.attr("placeholder", "");
	}
	var startTime = $("#start-time-input");
	var startTimeVal = startTime.val();
	if (startTimeVal === "") {
		startTime.css("border", "3px solid #cc0000");
		startTime.css("border-style", "");
		startTime.attr("placeholder", "*Start Time Required");
	} else {
		startTime.css("border-style", "");
		startTime.css("border-width", "");
		startTime.css("border-color", "");
		startTime.attr("placeholder", "");
	}
	var endTime = $("#end-time-input");
	var endTimeVal = endTime.val();
	if (endTimeVal === "") {
		endTime.css("border", "3px solid #cc0000");
		endTime.css("border-style", "");
		endTime.attr("placeholder", "*End Time Required");
	} else {
		endTime.css("border-style", "");
		endTime.css("border-width", "");
		endTime.css("border-color", "");
		endTime.attr("placeholder", "");
	}
	var startDate = $("#start-date-input").val();
	var startTime = $("#start-time-input").val();
	var endTime = $("#end-time-input").val();
	var endDate = $("#end-date-input").val();
	var startDateNum = parseInt(startDate.substr(0,4) + startDate.substr(5,2) + startDate.substr(8,2))+parseInt(startTime.substr(0,2) + startTime.substr(3,4)) ;
	var endDateNum = parseInt(endDate.substr(0,4) + endDate.substr(5,2) + endDate.substr(8,2)) + parseInt(endTime.substr(0,2) + endTime.substr(3,4));
	if ((titleVal != "") && (descriptionVal!="") && (hostVal!="") && (guestVal!="") && (placeVal!="")&& (startDateVal!="") && (endDateVal!="") && (startTimeVal!="") && (endTimeVal!="") && (endDateNum > startDateNum)) {
		window.location.assign('home-page.html');
		return false;
	}
});