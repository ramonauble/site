'use strict';

$(document).ready(function() {
  //size UI elements dynamically on page load
  resize();

  //initialize active section & define object
  //of key-value pairs for section selection
  var $activeSect = $("#about");
  var $infoDivDict = {
    about: $("#aboutDiv"),
    works: $("#worksDiv"),
    links: $("#linksDiv")
  };

  //underline selected section &
  //fade in selected container
  $activeSect.css("border-bottom", "2px solid black");
  $infoDivDict["about"].fadeIn(63);

  //initialize active subsection & define object
  //of key-value pairs for subsection selection
  var $activeSubSect = $("#intro");
  var $subSectDivDict = {
    intro: $("#introDiv"),
    skills: $("#skillsDiv")
  };

//────────────────────────────────────────────────
//configure event handlers for section selection
//────────────────────────────────────────────────
  //stop queued animations & animate bg color of
  //most recently entered section element
  $(".sect").mouseenter(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#BB94B0"}, 63);
  })
  //animate background color of most recently
  //exited section element
  .mouseleave(function() {
    $(this).animate({
      backgroundColor: "#EED0E6"}, 63);
  })
  //stop queued animations & animate bg color of
  //clicked element
  .mousedown(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#966F8B"}, 63);
  })
  //stop queued animations & begin callback sequence
  //to animate between sections
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
    //animate bg color of most newly deselected element
    $activeSect.animate({
      backgroundColor: "#BB94B0"}, 63);
  });

//────────────────────────────────────────────────
//configure event handlers for subsection selection
//────────────────────────────────────────────────
  //stop queued animations & animate bg color of
  //most recently entered subsection element
  $(".hDiv").mouseenter(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#BB94B0"}, 63);
  })
  //animate background color of most recently
  //exited subsection element
  .mouseleave(function() {
    $(this).animate({
      backgroundColor: "#cfabc5"}, 63);
  })
  //stop queued animations & animate bg color of
  //selected element
  .mousedown(function() {
    $(this).stop(true, true);
    $(this).animate({
      backgroundColor: "#966F8B"}, 63);
  })
  //stop queued animations & begin callback sequence
  //to animate between subSections
  .mouseup(function() {
    $(this).stop(true, true);
    if($(this).attr("id") != $activeSubSect.attr("id")) {
      let toHide = $activeSubSect.attr("id");
      $activeSubSect = $(this);
      $subSectDivDict[toHide].slideUp(63, function() {
        let toShow = $activeSubSect.attr("id");
        $subSectDivDict[toShow].slideDown(63);
      });
    }
    //animate bg color of newly deselected element
    $activeSubSect.animate({
      backgroundColor: "#BB94B0"}, 63);
  });
});

//resize elements on window size change
$(window).resize(function() {
  resize();
});

//element sizing
function resize() {
  //define new base sizes per new window width
  let titleWidth = (window.innerWidth/2) + "px";
  let titleWidthInt = parseInt(titleWidth);
  let titleHeight = (titleWidthInt/6) + "px";
  let titleFontSize = (titleWidthInt/6) + "px";

  //resize name
  $(".name").css("width", titleWidth)
            .css("height", titleHeight)
            .css("line-height", titleHeight)
            .css("font-size", titleFontSize)
            .css("margin", "2px auto 0px");

  //resize accent canvas
  $("#accentCanv").css("width", titleWidth);

  //resize section selection div
  $("#sectDiv").css("width", titleWidth)
              .css("margin", "0 auto 6px");

  //resize section selectors
  $(".sect").css("width", titleWidthInt/3.5);

  //resize selected content container
  $(".infoDiv").css("width", titleWidthInt*(6/7))
              .css("margin", "0 auto");

  //resize content within container
  $(".headerP").css("font-size", (titleWidthInt/21.5) + "px")
              .css("margin", "0 auto");
  $(".contentP").css("font-size", (titleWidthInt/29.5) + "px")
              .css("margin", "0 auto");
}
