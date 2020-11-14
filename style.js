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
  $infoDivDict["about"].fadeIn(63);

  $(".sect").mouseenter(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#BB94B0"}, 63);
  })
  .mouseleave(function() {
    $(this).animate({
      backgroundColor: "#EED0E6"}, 63);
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
      $infoDivDict[toHide].fadeOut(63, function() {
        $activeSect.css("border-bottom", "2px solid black");
        let toShow = $activeSect.attr("id");
        $infoDivDict[toShow].fadeIn(63);
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
  let titleWidthInt = parseInt(titleWidth);
  let titleHeight = (titleWidthInt/6) + "px";
  let titleFontSize = (titleWidthInt/6) + "px";

  $(".name").css("width", titleWidth)
            .css("height", titleHeight)
            .css("line-height", titleHeight)
            .css("font-size", titleFontSize)
            .css("margin", "2px auto 0px");

  $("#accentCanv").css("width", titleWidth);

  $("#sectDiv").css("width", titleWidth)
              .css("margin", "0 auto");

  $(".sect").css("width", titleWidthInt/3.5);

  $(".infoDiv").css("width", titleWidthInt*(6/7))
              .css("margin", "0 auto");

  $(".headerP").css("font-size", (titleWidthInt/21.5) + "px");
  $(".contentP").css("font-size", (titleWidthInt/23.5) + "px")
}
