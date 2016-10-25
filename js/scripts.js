$(document).ready(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    console.log(countTo, countBy);
    // debugger;
    $("#output").empty();
    if (countTo < countBy || countBy <= 0 || !countTo || !countBy) {
      alert("HEY! LISTEN!")
      alert("Hey you got your numbers mixed up")
    } else {
      for (i = countBy; i <= countTo; i += countBy) {
        console.log("Looping");
        $("#output").append("<li>" + i + "</li>");
      }
    }
  });
});
