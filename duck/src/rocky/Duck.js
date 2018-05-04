var pixel = 12;
var pic = [
  [0,0,2,2,2,0,0,0,0,0],
  [0,2,2,2,2,2,0,0,0,0],
  [0,2,2,1,2,2,0,0,0,0],
  [3,3,2,2,2,2,0,0,2,0],
  [0,0,2,2,2,0,0,0,2,2],
  [0,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,0],
  [0,2,2,2,2,2,2,2,0,0],
];


function drawDuck(ctx, w, h) {
  var lP = (w - pic[0].length * pixel) / 2;
  var tP = (h - pic.length * pixel) / 2;

  for (var y = 0; y < pic.length; y++) {
    for (var x = 0; x < pic[y].length; x++) {
      if (pic[y][x] == 1) {
        ctx.fillStyle = "black";
      } else if (pic[y][x] == 2) {
        ctx.fillStyle = "white";
      } else if (pic[y][x] == 3) {
        ctx.fillStyle = "grey";
      }
      if (pic[y][x] > 0) {
        ctx.fillRect(lP + pixel * x, tP + pixel * y, pixel, pixel);
      }
    }
  }
}


module.exports = drawDuck;