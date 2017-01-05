$(document).ready(start);

function start() {
  $("#submit").click(compareNumbers);
}

function compareNumbers() {
  var a = $("#a").val();
  var b = $("#b").val();
  var aInt = parseInt(a);
  var bInt = parseInt(b);

  if (aInt === bInt) {
    $("#comparison").html("=");
  }
  else if (aInt > bInt) {
    $("#comparison").html(">");
  }
  else if (aInt < bInt) {
    $("#comparison").html("<");
  }
  else {
    $("#comparison").html("");
  }  
}
