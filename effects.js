$(document).ready(function() {
  var $accentCanv = $("#accentCanv");
  var accentCanvCtx = $accentCanv[0].getContext("2d");
  var accentCanvWidth = accentCanvCtx.canvas.clientWidth;
  var accentCanvHeight = accentCanvCtx.canvas.clientHeight;
  var bgState = 0;
  var lastUpdate;

  console.log(accentCanvWidth);
  console.log(accentCanvHeight);

  function animateCanvas(timestamp) {
    if (lastUpdate == undefined || (timestamp - lastUpdate) > 1000) {
      lastUpdate = timestamp;
      if (bgState == 0) {
        accentCanvCtx.fillStyle = "#FFFFFF";
        accentCanvCtx.fillRect(0, 0, accentCanvWidth, accentCanvHeight);
        bgState = 1;
      } else {
        accentCanvCtx.fillStyle = "#000000";
        accentCanvCtx.fillRect(0, 0, accentCanvWidth, accentCanvWidth);
        bgState = 0;
      }
    }
    window.requestAnimationFrame(animateCanvas);
  }

  window.requestAnimationFrame(animateCanvas);
});
