$(document).ready(function(){

  //Handle form subission
  $("form").submit(function(e){
    e.preventDefault();

    var city = $("#city-type").val().toLowerCase().trim();
    displayCity(city);
  });

  function displayCity(city) {
    if(city === "nyc" || city === "new york city") {
      $("body").attr("class", "nyc");
    }
    else if(city === "austin") {
      $("body").attr("class", "austin");
    }
  }
});

//     var city = $("#city-type").val();
//
//     alert(city);
//
//     if(city === "NYC") {
//       $("body").attr("class", "nyc");
//     }
//   });
//
// });
