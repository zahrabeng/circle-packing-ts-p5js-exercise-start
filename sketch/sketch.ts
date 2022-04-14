function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  test();
}

function draw() {
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
