$ (document).ready(start);

function start() {
  console.log("Ready");

  $("#light_switch").click(handleLights);
}

function handleLights () {
  var lightsOff = $("body").hasClass("dark");

  if (lightsOff == true) {
    $("body").removeClass("dark")
  }
  else {
    $("body").addClass("dark");
  }
}
