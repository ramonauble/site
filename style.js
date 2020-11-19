'use strict';

$(document).ready(function() {
  //size UI elements dynamically on page load
  //initialize active section
  var $activeSect = $("#about");
  var $sectDivDict = {
    about: $("#aboutDiv"),
    works: $("#worksDiv"),
    links: $("#linksDiv")
  };

  //underline selected section &
  //fade in selected container
  $activeSect.css("border-bottom", "2px solid black");
  $sectDivDict["about"].fadeIn(63);

  //initialize active subsection
  var $activeSubSect = $("#intro");
  var $subSectDivDict = {
    intro: $("#introDiv"),
    skills: $("#skillsDiv"),
    interests: $("#interestsDiv")
  };
  $activeSubSect.toggleClass("active");
  $(".subSectC").hide();
  $subSectDivDict[$activeSubSect.attr("id")].show();

  resize();

//────────────────────────────────────────────────
//configure event handlers for section selection
//────────────────────────────────────────────────
  //stop queued animations & animate bg color of
  //most recently entered element
  $(".sect, .subSect").mouseenter(function() {
    let $this = $(this);
    $this.stop(true, true);
    $this.animate({
      backgroundColor: "#BB94B0"}, 63);
  })
  //stop queued animations & animate bg color of
  //most recently exited element
  .mouseleave(function() {
    let $this = $(this);
    $this.stop(true, true);
    if($this.hasClass("sect")) {
      $this.animate({
        backgroundColor: "#EED0E6"}, 63);
    } else {
      $this.animate({
        backgroundColor: "#cfabc5"}, 63);
    }
  })
  //stop queued animations & animate bg color of
  //most recently clicked element
  .mousedown(function() {
    let $this = $(this);
    $this.stop(true, true);
    $this.animate({
      backgroundColor: "#966F8B"}, 63);
  })
  //stop queued animations
  .mouseup(function() {
    let $this = $(this);
    if($this.hasClass("sect")) {
      if($this.attr("id") != $activeSect.attr("id")) {
        $activeSect.css("border-bottom", "none");
        let $toHide = $sectDivDict[$activeSect.attr("id")];
        $activeSect = $this;
        $toHide.fadeOut(63, function() {
          $activeSect.css("border-bottom", "2px solid black");
          let $toShow = $sectDivDict[$activeSect.attr("id")];
          $toShow.fadeIn(63);
        });
      }
      $(this).stop(true, true);
      //animate bg color of newly deselected element
      $activeSect.animate({
        backgroundColor: "#BB94B0"}, 63);
    } else {
      if($this.attr("id") != $activeSubSect.attr("id")) {
        let $toHide = $subSectDivDict[$activeSubSect.attr("id")];
        $activeSubSect.toggleClass("active"); //remove from old
        $activeSubSect = $this;
        $activeSubSect.toggleClass("active"); //add to new
        $toHide.slideUp(63, function() {
          resizeFonts();
          let $toShow = $subSectDivDict[$activeSubSect.attr("id")];
          $toShow.slideDown(63);
        });
      }
      $(this).stop(true, true);
      //animate bg color of newly deselected element
      $activeSubSect.animate({
        backgroundColor: "#CFABC5"}, 63);
    }
  });
});

//resize elements on window size change
$(window).resize(function() {
  resize();
});

//element sizing
function resize() {
  //define new base sizes per new window width
  let titleWidth = (window.innerWidth/1.42) + "px";
  let titleWidthInt = parseInt(titleWidth);
  let titleHeight = (titleWidthInt/9.5) + "px";
  let titleFontSize = (titleWidthInt/8) + "px";
  let subSectFontShow = (titleWidthInt/27.5) + "px";
  let subSectFontHide = (titleWidthInt/33.5) + "px";

  //resize name
  $(".name").css("width", titleWidth)
            .css("height", titleHeight)
            .css("line-height", titleHeight)
            .css("font-size", titleFontSize)
            .css("margin", "2px auto 0px");

  //resize accent canvas
  $("#accentCanv").css("width", parseInt(titleWidth)/1.145);

  //resize section selection div
  $("#sectDiv").css("width", titleWidth)
              .css("margin", "0 auto");

  //resize section selectors
  $(".sect").css("width", titleWidthInt/3.5)
            .css("font-size", titleWidthInt/33.5);

  //resize selected content container
  $(".infoDiv").css("width", titleWidthInt*(6/7))
              .css("margin", "0 auto");

  //resize content within container
  resizeFonts();
  $(".contentP").css("font-size", (titleWidthInt/32.5) + "px")
              .css("margin", "0 auto");
}

function resizeFonts() {
  let titleWidth = (window.innerWidth/1.42);
  let subSectFontShow = (titleWidth/27.5);
  let subSectFontHide = (titleWidth/35.5);
  $(".headerP").each(function() {
    if ($(this).parent().hasClass("active")) {
      $(this).css("font-size", (subSectFontShow + "px"))
                  .css("margin", "0 auto");
      $(this).parent().css("height", ((subSectFontShow + 12) + "px"))
                  .css("margin", "0 auto");
    } else {
      $(this).css("font-size", (subSectFontHide + "px"))
                  .css("margin", "0 auto");
      $(this).parent().css("height", ((subSectFontHide + 12) + "px"))
                  .css("margin", "0 auto");
    }
  });
}
