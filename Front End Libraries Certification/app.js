$(document).ready(function () {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "yellow");
  $("#right-well").children().css("color", "orange");
  $("#left-well").children().css("color", "green");
  $(".target:nth-child(2)").addClass("animate__animated animate__bounce");
  $(".target:even").addClass("animate__animated animate__shake");
  $("body").addClass("animate__animated animate__hinge");
});
