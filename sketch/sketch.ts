function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  const circlesArray = calculatePackedCircles(width, height);
  for (const c of circlesArray) {
    drawCircle(c);
  }
}

function drawCircle(c: Circle) {
  fill(randomColour());
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

function randomColour(): p5.Color {
  push();
  colorMode(HSB);
  //color(hue is 0-360, saturation is 0-100, brightness is 0-100)
  const c = color(random(20, 50), random(80, 100), 100);
  pop();
  return c;
}