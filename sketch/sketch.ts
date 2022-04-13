
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('white');
  const circlesArray = calculatePackedCircles(width, height);
  for (const c of circlesArray) {
    drawCircle(c);
  }
}

function drawCircle(c: Circle) {
  const shade = random(50, 100);
  fill(shade);
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}


function keyPressed() {
  //keys 1, 2 choose the implementation function and redraw
  if (key === "1") {
    calculatePackedCircles = calculatePackedCircles1;
    redraw();
  }
  if (key === "2") {
    calculatePackedCircles = calculatePackedCircles2;
    redraw();
  }
}