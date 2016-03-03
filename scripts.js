var isItPrime = function(number) {
  if((number === 1) || (number % 2 === 0) || (number % 3 === 0) || (number % 3 === 0) || (number % 5 === 0) || (number % 7 === 0)){
    return false;
  } else if (number === 2){
    return true;
  } else {
    return true;
  }
};

$(document).ready(function() {
  $("#primetester").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = isItPrime(number);

    if (!result) {
      $(".sentence").text("NOT PRIME");
    } else {
      $(".not").text("PRIME!");
      alert("prime");
    }

    $("#result").show();
    event.preventDefault();
  });
});
