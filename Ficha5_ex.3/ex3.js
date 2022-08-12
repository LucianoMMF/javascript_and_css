/*$(document).ready(function(){
    $("#move").click(function(){
        $("#square")
        .animate({left: '+=1200'}, 1000)
        .animate({top: '+=400'}, 1000)
        .animate({left: 0}, 1000)
        .animate({top: 0}, 1000)
    });
});*/

let sizeWhidthScreen = $(window).width();
let sizeHeightScreen = $(window).height();

console.log(sizeWhidthScreen);
console.log(sizeHeightScreen);

$(document).ready(function () {
  $("#square").click(moveObj);
});

function moveObj() {
  $("#square").html("To right");

  $("#square").animate({ left: sizeWhidthScreen - "200" }, 2000, function () {
    $("#square").html("To down");
  });
  $("#square").animate({ top: sizeHeightScreen - "200" }, 2000, function () {
    $("#square").html("To left");
  });
  $("#square").animate({ left: 0 }, 2000, function () {
    $("#square").html("To top");
  });
  $("#square").animate({ top: 0 }, 2000, function () {
    $("#square").html("I'm here");
  });
}