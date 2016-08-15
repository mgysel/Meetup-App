// var submit = document.getElementById('create-meetup-button');



// var meetupButton = document.getElementById("create-meetup-button");
// meetupButton.onclick = function() {
//     // alert("clicked");
//     location.href = "home-page.html";
// };

// $("#create-meetup-button").click(function() {
//   console.log("mike");
//   window.location.replace("home-page.html");
// });



// var meetupData = function() {

//   $(".meetup-list").append(""+
//     "<li class='event meetup centered'>" +
//       "<div class='col-md-12 event-date'>" +
//           "<p>Date</p>" +
//       "</div>" +
//       "<div class='col-md-12 event-info'>" +
//           "<div class='col-md-1 event-time'>" +
//               "<p class='date'>Time</p>" +
//           "</div>" +
//           "<div class='col-md-11 event-etc'>" +
//               "<p class='title'>Title</p>" +
//               "<p class='description'>Description: </p>" +
//           "</div>" +
//       "</div>" +
//     "</li>"
//   );
// }();

var model = [

];

// // console.log($(".date").text());
var submit = document.getElementById('create-meetup-button');
submit.onclick = function() {
  var title = document.getElementById('title-input').value;
  var description = document.getElementById('description-input').value;
  var host = document.getElementById('host-input').value;
  var guest = document.getElementById('guest-input').value;
  var place = document.getElementById('place-input').value;
  var date = document.getElementById('date-input').value;
  var startTime = document.getElementById('start-time-input').value;
  var endTime = document.getElementById('end-time-input').value;
  // if (title.length>0 && description.length>0) {
  //   window.location.assign('home-page.html');
  // }
  var dataArray = [title, description, host, guest, place, date, startTime, endTime];
  model.push(dataArray);
  $(".meetup-list").append(""+
    "<li class='event meetup centered'>" +
      "<div class='col-md-12 event-date'>" +
          "<p>"+self.userDate+"</p>" +
      "</div>" +
      "<div class='col-md-12 event-info'>" +
          "<div class='col-md-1 event-time'>" +
              "<p class='date'>Time</p>" +
          "</div>" +
          "<div class='col-md-11 event-etc'>" +
              "<p class='title'>" + self.userTitle + "</p>" +
              "<p class='description'>Description: "+ self.userDescription + "</p>" +
          "</div>" +
      "</div>" +
    "</li>"
  );
};



// var ViewModel = function() {
//   var self = this;
//   this.userTitle = ko.observable("");
//   this.userDescription = ko.observable("");
//   console.log(self.userDescription);
//   self.userHost = ko.observable("");
//   self.userGuest = ko.observable("");
//   self.userPlace = ko.observable("");
//   self.userDate = ko.observable("");
//   self.userStartTime = ko.observable("");
//   self.userEndTime = ko.observable("");
//   self.userMessage = ko.observable("");
// };

//  ko.applyBindings(new ViewModel());


