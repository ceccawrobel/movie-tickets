// business logic

function Ticket(age, time, movieType) {
  this.age = age;
  this.time = time;
  this.movieType = movieType;
}

Ticket.prototype.price = function() {
  var userPrice = 10
  if (this.age === "youth") {
    userPrice -= 2
  }
  if (this.time === "early") {
    userPrice -= 3
  }
  if (this.movieType === "second") {
    userPrice -= 2
  }

  alert(userPrice)
}


//
// do this prototype^ instead of all these objects-->
// ..and finish it by writing branching statements to calculate "minus 2 for youth" etc


// user interface logic

$(document).ready(function() {

  $("#userInfo").submit(function(event) {
    event.preventDefault();
    console.log("submit happened");
    var userAge = $("#userAge").val();
    var userTime = $("#userTime").val();
    var userMovieType = $("#userMovieType").val();
    var userTicket = new Ticket(userAge, userTime, userMovieType);
    userTicket.price()
  })

})
