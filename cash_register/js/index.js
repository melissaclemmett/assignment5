$(document).ready(start);

function start () {
  $("#entry").submit(handleSubmit);
}

function updateTotal(amount) {
  //Retrieve and sanitize current total
  var currentTotal = $("#total").html();
  var currentTotal = parseFloat(currentTotal);

  //Calculate new Total
  var newTotal = currentTotal + amount;

  //Update HTML
  $("#total").html(newTotal);

}

function handleSubmit(event) {
  event.preventDefault();
  // console.log("Submitted!")

  var newAmount = $("#newEntry").val();
  newAmount = parseFloat(newAmount);

  if (newAmount < 0 || newAmount > 0) {
    insertLineItem(newAmount);
    updateTotal(newAmount);
    $("#newEntry").val("");
  }
  else {
    alert("Error!");
  }
  
  $("newEntry").val("");
}

function insertLineItem(content) {
  $("#entries").append("<tr><td colspan='2'>" + content + "</td></tr>");
}
