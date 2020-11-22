$(document).ready(function() {
  var $accentCanv = $("#accentCanv");
  var accentCanvCtx = $accentCanv[0].getContext("2d");
  var canvWidth = accentCanvCtx.canvas.clientWidth;
  var canvHeight = accentCanvCtx.canvas.clientHeight;
  var bgState = 0;
  var lastUpdate;

  function animateCanvas(timestamp) {
    if (lastUpdate == undefined || (timestamp - lastUpdate) > 66) {
      lastUpdate = timestamp;
      for (let rectX = 0; rectX < (canvWidth*4); rectX += 2) {
        bgState = Math.random();
        let rectY = 0 + (2*Math.floor((rectX/canvWidth)));
        if (bgState < .1667) {
          accentCanvCtx.fillStyle = "#EED0E6";
        } else if (bgState < .3333) {
          accentCanvCtx.fillStyle = "#D8B9D0";
        } else if (bgState < .5) {
          accentCanvCtx.fillStyle = "#BB94B0";
        } else if (bgState < .6667) {
          accentCanvCtx.fillStyle = "#966F8B";
        } else if (bgState < .8333) {
          accentCanvCtx.fillStyle = "#604559";
        } else {
          accentCanvCtx.fillStyle = "#4a3946";
        }
        accentCanvCtx.fillRect(rectX%(canvWidth + 5), rectY, 5, canvHeight);
      }
    }
    window.requestAnimationFrame(animateCanvas);
  }

  window.requestAnimationFrame(animateCanvas);
});
