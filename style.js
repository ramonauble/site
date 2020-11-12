'use strict';

$(document).ready(function() {
  resize();
  $(".sect").mouseenter(function() {
    $(this).stop();
    $(this).animate({
      backgroundColor: "#BB94B0"}, 54);
  })
  .mouseleave(function() {
    $(this).stop();
    $(this).animate({
      backgroundColor: "#EED0E6"}, 54);
  })
  .mousedown(function() {
    $(this).stop();
    $(this).animate({
      backgroundColor: "#966F8B"}, 54);
  })
  .mouseup(function() {
    $(this).stop();
    $(this).animate({
      backgroundColor: "#BB94B0"}, 54);
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
}
