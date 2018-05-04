var rocky = require('rocky');
var Duck = require('./Duck');

// An object to cache our date & time values,
// to minimize computations in the draw handler.
var clockData = {
  time: ''
};

// Every minute
// https://developer.pebble.com/docs/rockyjs/rocky/#on
rocky.on('minutechange', function(event) {
  // Current date/time
  // https://developer.pebble.com/docs/rockyjs/Date/
  var d = event.date;

  // Get current time, based on 12h or 24h format (01:00 or 1:00 AM)
  clockData.time = d.toLocaleTimeString().replace(/:\d+($| )/, '$1');

  // Force screen redraw
  rocky.requestDraw();
});

// Redraw the screen
rocky.on('draw', function(event) {
  // Drawing canvas
  var ctx = event.context;

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Clear the canvas
  // https://developer.pebble.com/docs/rockyjs/CanvasRenderingContext2D/#Canvas
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  Duck(ctx, w, h);

  // Time font
  // https://developer.pebble.com/docs/rockyjs/CanvasRenderingContext2D/#font
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.font = '26px bold Leco-numbers-am-pm';

  // Time
  var offsetY = (ctx.canvas.clientHeight - h) / 2 - 30;
  var centerX = w / 2;
  ctx.fillText(clockData.time, centerX, (66 - offsetY));
});