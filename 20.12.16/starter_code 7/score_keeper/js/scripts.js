$(document).ready(start);

function start() {
  $("#add5").click(function(){
      plus(5);
  });
  $("#zero").click(zero);
  $("#add10").click(plusTen);
  $("#sub1").click(subOne);
}

function zero() {
  $("#result").html(0);
}

function plusTen() {
  var currentValue = $("#result").html();
  currentValue = parseInt(currentValue);

  currentValue += 10;
  $("#result").html(currentValue);
}


// function plusFive() {
//   var currentValue = $("#result").html();
//   currentValue = parseInt(currentValue);
//
//   currentValue += 5; //increment currentValue by 5
//   $("#result").html(currentValue);
// }

function plus(number) {
  var currentValue = $("#result").html();
  currentValue = parseInt(currentValue);

  currentValue += number;
  $("#result").html(currentValue);
}

function subOne() {
  var currentValue = $("#result").html();
  currentValue = parseInt(currentValue);

  currentValue -- ;
  $("#result").html(currentValue);
}

function plusFiveRaw() {
  var currentValue = document.getElementById("result").innerHTML; //Get the current value
  currentValue = parseInt(currentValue); //Convert to integer
  var resultValue = currentValue + 5; //Add 5 to curretnValue
  document.getElementById("result").innerHTML = resultValue; //Put new value back in
}
