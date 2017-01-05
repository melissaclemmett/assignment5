$(document).ready(function(){
  $("#celsius").focus(clearFarhrenheit);
  $("#fahrenheit").focus(clearCelsius);

  $("form").submit(function(e){
    e.preventDefault();

    var result;
    var c = $("#celsius").val();
    c = parseFloat(c);
    var f = $("#fahrenheit").val();
    f = parseFloat(f);

    // If 'c' is a valid number
    if(!isNaN(c)) {
      result = (c * 1.8) + 32;
      $("#fahrenheit").val(result);
      // console.log(result);
    }

    else if(!isNaN(f)) {
      result = (f - 32) * 5 / 9;
      $("#celsius").val(result);
    }
  });

  var d = 0;

  setInterval(function(){
    rotateForm(d);
    d += 10;
  }, 100);
});

function rotateForm(deg){
  $("form").css("transform", "rotate(" + deg + "deg)");
  console.log("hello");
}

function clearCelsius() {
    $("#celsius").val("");
}

function clearFarhrenheit(){
    $("#fahrenheit").val("");
}




// $(document).ready(start);
//
// function start() {
//   $("#submit").click(compareNumbers);
// }
//
// function compareNumbers() {
//   var a = $("#a").val();
//   var b = $("#b").val();
//   var aInt = parseInt(a);
//   var bInt = parseInt(b);
//
//   if (aInt === bInt) {
//     $("#comparison").html("=");
//   }
//   else if (aInt > bInt) {
//     $("#comparison").html(">");
//   }
//   else if (aInt < bInt) {
//     $("#comparison").html("<");
//   }
//   else {
//     $("#comparison").html("");
//   }
// }
