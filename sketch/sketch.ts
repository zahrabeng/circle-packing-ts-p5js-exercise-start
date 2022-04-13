function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  const circlesArray = calculatePackedCircles(width, height);
  for (const c of circlesArray) {
    fill('orange')
    circle(c.pos.x, c.pos.y, c.radius * 2);
  }
}
