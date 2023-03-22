// gets the DOM ready and makes the jQuery load after the browser has finished loading
$(document).ready(function () {
  // sets the function
  $(".saveBtn").on("click", function () {
    console.log(this);

    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, textValue);
  });

  function updateTimeBlock(){
    var currentHour = dayjs().hour();

    $('.time-block').each(function(){
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1])

      if(timeBlockHour < currentHour) {
        $(this).addClass('past')
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')

      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })

  }
  updateTimeBlock()

  $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'))

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
