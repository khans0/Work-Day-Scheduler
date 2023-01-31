$(document).ready(function() {
  function updateTime() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }
  setInterval(updateTime, 1000);

  // Create timeblocks for standard business hours (9am - 5pm)
  for (var i = 9; i <= 17; i++) {
    var hour = moment().hour(i).minute(0);
    var timeblock = $(
      "<div class='row time-block'>" +
        "<div class='col-sm-2 hour'>" +
        hour.format("hA") +
        "</div>" +
        "<textarea class='col-sm-8 description'></textarea>" +
        "<button class='col-sm-2 saveBtn'>" +
        "<i class='far fa-save'></i>" +
        "</button>" +
        "</div>"
    );

    // Color code each timeblock based on past, present, and future
    if (hour.isBefore(moment(), "hour")) {
      timeblock.find("textarea").addClass("past");
    } else if (hour.isSame(moment(), "hour")) {
      timeblock.find("textarea").addClass("present");
    } else {
      timeblock.find("textarea").addClass("future");
    }

    // Add the timeblock to the container
    $(".container").append(timeblock);
  }

  // Save the event to local storage when the save button is clicked
  $(".saveBtn").click(function () {
    var hour = $(this).parent().find(".hour").text();
    var description = $(this).parent().find(".description").val();
    localStorage.setItem(hour, description);
  });

  // Load the events from local storage and display them
  $(".time-block").each(function () {
    var hour = $(this).find(".hour").text();
    var description = localStorage.getItem(hour);
    $(this).find(".description").val(description);
  });
});
