//Adds the date for the beginning of the scheduler
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, hh:mm a"));


// for saving button

$(saveBtn).on("click", function() {
    console.log("hello");
    var toDoToday = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");
    localStorage.setItem(toDoToday, timeOfDay);
})
// add each hour to the local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//insert schedule template to change color based on time

function workHour() {
    var currentTime = moment().hour(); 
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(currentTime, timeBlock);
    
    // past
    if (currentTime > timeBlock ) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (currentTime == timeBlock) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    } else if (currentTime < timeBlock) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})}
workHour(); 
