var isItPrime = function(number) {
  if((number === 1) || ((number % 2 === 0) && (number != 2)) || ((number % 3 === 0) && (number != 3)) || ((number % 4 === 0) && (number != 4)) || ((number % 5 === 0) && (number != 5)) || ((number % 7 === 0) && (number != 7))){
    return false;
  } else {
    return true;
  }
};

$(document).ready(function() {
    $("button#check").click(function(){
      $("#primetester").hide();
      $("#clear").show();
    });

    $("button#clear").click(function(){
      $("#primetester").show();
      $("#clear").hide();
      $("#result").hide();
    });

  $("#primetester").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = isItPrime(number);

    if (!result) {
      $(".sentence").text("NOT PRIME");
    } else {
      $(".not").text("PRIME!");
      $(".sentence").text("PRIME");
    }

    $("#result").show();
    event.preventDefault();
  });

});
