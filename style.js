'use strict';

$(document).ready(function() {
  resize();
  var $activeSect = $("#about");
  var $infoDivDict = {
    about: $(aboutDiv),
    works: $(worksDiv),
    links: $(linksDiv)
  };
  $activeSect.css("border-bottom", "2px solid black");

  $(".sect").mouseenter(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#BB94B0"}, 72);
  })
  .mouseleave(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#EED0E6"}, 72);
  })
  .mousedown(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#966F8B"}, 63);
  })
  .mouseup(function() {
    $(this).stop(true, true);
    if($(this).attr("id") != $activeSect.attr("id")) {
      $activeSect.css("border-bottom", "none");
      let toHide = $activeSect.attr("id");
      $activeSect = $(this);
      $infoDivDict[toHide].fadeOut(72, function() {
        $activeSect.css("border-bottom", "2px solid black");
        let toShow = $activeSect.attr("id");
        $infoDivDict[toShow].fadeIn(72);
      });
    }
    $activeSect.animate({
      backgroundColor: "#BB94B0"}, 63);
  });
});

$(window).resize(function() {
  resize();
});

function resize() {
  let titleWidth = (window.innerWidth/2) + "px";
  let titleHeight = (parseInt(titleWidth)/6) + "px";
  let titleFontSize = (parseInt(titleWidth)/6) + "px";

  $(".name").css("width", titleWidth)
            .css("height", titleHeight)
            .css("line-height", titleHeight)
            .css("font-size", titleFontSize)
            .css("margin", "2px auto 0px");

  $("#accentCanv").css("width", titleWidth);

  $("#sectDiv").css("width", titleWidth)
              .css("margin", "0 auto");

  $(".sect").css("width", parseInt(titleWidth)/3.5);

  $(".infoDiv").css("width", parseInt(titleWidth)*(6/7))
              .css("margin", "0 auto");
}
