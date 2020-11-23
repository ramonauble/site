$(document).ready(function() {
  var $accentCanv = $("#accentCanv");
  var accentCanvCtx = $accentCanv[0].getContext("2d");
  var canvWidth = accentCanvCtx.canvas.clientWidth;
  var canvHeight = accentCanvCtx.canvas.clientHeight;
  var bgState = 0;
  var lastUpdate;

  var updateTime = 33; //period of new canvas frames in ms
  var canvMult = 16; //number of full passes made over the canvas width
  var rectWidth = 3;

  $(".sect, .subSect").mouseup(function() {
    $this = $(this);
    updateTime = Math.ceil((12 + (138 * Math.random())));
    rectWidth = Math.ceil(12 * Math.random());
  });

  function animateCanvas(timestamp) {
    if (lastUpdate == undefined || (timestamp - lastUpdate) > updateTime) {
      lastUpdate = timestamp;
      for (let rectX = 0; rectX < (canvWidth*canvMult); rectX += rectWidth) {
        bgState = Math.random();
        let rectY = (2*Math.floor((rectX/canvWidth)));
        if (bgState < .1667) {
          accentCanvCtx.fillStyle = "#ffe3e3";
        } else if (bgState < .3333) {
          accentCanvCtx.fillStyle = "#ffcfcf";
        } else if (bgState < .5) {
          accentCanvCtx.fillStyle = "#BB94B0";
        } else if (bgState < .6667) {
          accentCanvCtx.fillStyle = "#966F8B";
        } else if (bgState < .8333) {
          accentCanvCtx.fillStyle = "#604559";
        } else {
          accentCanvCtx.fillStyle = "#4a3946";
        }
        accentCanvCtx.fillRect(rectX%(canvWidth + rectWidth), rectY, rectWidth, canvHeight);
      }
    }
    window.requestAnimationFrame(animateCanvas);
  }

  window.requestAnimationFrame(animateCanvas);
});
