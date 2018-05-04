var rocky = require('rocky');
var Dick = require('./Dick');

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();

  // Set the text color
  ctx.fillStyle = 'white';

  // Center align the text
  ctx.textAlign = 'center';

  // Display the time, in the middle of the screen
  ctx.font = '21px Roboto';
  // ctx.fillText(d.toLocaleTimeString(), w / 2, h - 28, w);
  // ctx.fillText("Rubber Dicky", w / 2, 2, w);

  Dick(ctx, w, h);
  
});

// rocky.on('minutechange', function(event) {
rocky.on('minutechange', function(event) {
  // Display a message in the system logs
  console.log("Another second with your Pebble!");

  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});