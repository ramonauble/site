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
    interests: $("#interestsDiv"),
    webDesign: $("#webDesignDiv"),
    social: $("#socialDiv")
  };
  $activeSubSect.toggleClass("active");
  $(".subSectC").hide();
  $subSectDivDict[$activeSubSect.attr("id")].show();

  let windowWidth = parseFloat(window.innerWidth);
  let titleWidth = $(".inner").width();
  if (windowWidth > 696) {
    titleWidth = 666;
  } else {
    titleWidth = titleWidth/1.01;
  }
  resize(titleWidth);

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
        let $toHideSS = $subSectDivDict[$activeSubSect.attr("id")];
        $activeSubSect.toggleClass("active"); //remove from old
        if ($activeSect.attr("id") == "about") {
          $activeSubSect = $("#intro");
        } else if ($activeSect.attr("id") == "works") {
          $activeSubSect = $("#webDesign");
        } else {
          $activeSubSect = $("#social");
        }
        $activeSubSect.toggleClass("active"); //add to new
        $toHide.fadeOut(63, function() {
          $toHideSS.hide();
          $activeSect.css("border-bottom", "2px solid black");
          let $toShow = $sectDivDict[$activeSect.attr("id")];
          let $toShowSS = $subSectDivDict[$activeSubSect.attr("id")];
          resizeFonts(titleWidth);
          $toShow.fadeIn(63, function() {
            $toShowSS.slideDown(63);
          });
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
          resizeFonts(titleWidth);
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
  //resize();
});

//element sizing
function resize(titleWidth) {
  //define new base sizes per new window width
  let windowWidth = parseFloat(window.innerWidth);
  let titleHeight = (titleWidth/9.5) + "px";
  let titleFontSize = (titleWidth/8) + "px";

  //resize name
  $(".name").css("width", (titleWidth + "px"))
            .css("height", titleHeight)
            .css("line-height", titleHeight)
            .css("font-size", titleFontSize)
            .css("margin", "2px auto 0px");

  //resize accent canvas
  $("#accentCanv").width((titleWidth/1.105) + "px")
                .css("margin", "0 auto");
  $("#accentCanv")[0].width = $("#accentCanv").width();
  $("#accentCanv")[0].height = $("#accentCanv").height();

  //resize section selection div
  $("#sectDiv").width(titleWidth)
              .css("margin", "0 auto");

  //resize section selectors
  $(".sect").width($("#accentCanv").width()/3.08)
            .css("font-size", titleWidth/30.5 + "px")
            .height(titleWidth/23.5);

  //resize selected content container
  $(".infoDiv").css("width", $("#accentCanv").width()/1.025)
              .css("margin", "5px auto 0px");

  //resize content within container
  resizeFonts(titleWidth);
  $(".contentP").css("font-size", (titleWidth/32.5) + "px")
              .css("margin", "0 auto");
}

function resizeFonts(titleWidth) {
  let subSectFontShow = titleWidth/23.5;
  let subSectFontHide = titleWidth/31.5;
  $(".headerP").each(function() {
    if ($(this).parent().hasClass("active")) {
      $(this).css("font-size", (subSectFontShow + "px"))
                  .css("margin", "0 auto");
      $(this).parent().css("height", ((subSectFontShow + 16) + "px"))
                  .css("margin", "0 auto");
    } else {
      $(this).css("font-size", (subSectFontHide + "px"))
                  .css("margin", "0 auto");
      $(this).parent().css("height", ((subSectFontHide + 16) + "px"))
                  .css("margin", "0 auto");
    }
  });
}
