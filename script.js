var dayofWeek = moment().format('dddd');
var dateofMonth = moment().format('MMMM Do')
var todaysDate = dayofWeek + ", " + dateofMonth;

$("#currentDay").text(todaysDate);

$("button").on("click", function () {
  var timeId = $(this).attr("time");

  var userTask = $(this).prev().val();
  localStorage.setItem(timeId, userTask);
});

var nineAm = localStorage.getItem("#9am");
if (nineAm) {
  $("9am").text(nineAm);
}





for (var i = 9; i < 18; i++) {
  // Get current hour
var today = new Date();
var currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(currentTime)

  var amPm = "am";
  if (i >= 12) {
    amPm = "pm";
  }

  var hour = i;
  if (i > 12) {
    hour -= 12;
  }
  var targetId = "#" + hour + amPm;

    if(currentTime > i + amPm){
      $(targetId).addClass("past");
  }

  else if(currentTime < i + amPm) {
      $(targetId).addClass("future");
  }

  else{
      $(targetId).addClass("present");
  }



  
  
 
 // var targetId = "#" + hour + amPm;
  //if currentTime > i  class past

  //var className = "past";

  //$(targetId).addClass(className);


  
  //else if currentTime < i class future
  // else class current

  





  // moment().format("MM/DD/YYYY");
  // moment().format("HH:MM")


  
}
