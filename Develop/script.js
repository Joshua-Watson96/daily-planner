// gets the DOM ready and makes the jQuery load after the browser has finished loading
$(document).ready(function () {
  // sets the function on click for the save button
  $(".saveBtn").on("click", function () {
    console.log(this);
    //sets value of the textarea in HTML
    var textValue = $(this).siblings(".description").val();
    //sets the value for the id attribute
    var time = $(this).parent().attr("id");
    // adds data to the localStorage
    localStorage.setItem(time, textValue);
  });

  // creates updateTimeBlock format with dayjs
  function updateTimeBlock(){
    //gets the hour of day from dayjs
    var currentHour = dayjs().hour();
    // selects time-block class
    $('.time-block').each(function(){
      //gets the attribute id - splits out the dash between hour and x
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1])
      //if the hour is less than current hour; shows past colour
      if(timeBlockHour < currentHour) {
        $(this).addClass('past')
        // If the hour is equal to the current hour; shows present colour
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
        // if hour is greater than the current hour; shows future colour
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })

  }
  //runs updateTimeBlock function
  updateTimeBlock()
  // shows the date in the header in date format
  $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'))
// adds user input to the local storage on save button click
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
