function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  const circlesArray = calculatePackedCircles();
  for (const c of circlesArray) {
    fill('orange')
    circle(c.pos.x, c.pos.y, c.radius * 2);
  }
}

function calculatePackedCircles() {
  //TODO: you need to implement this function properly!
  return [
    { pos: { x: 300, y: 300 }, radius: 100 },
    { pos: { x: 100, y: 100 }, radius: 20 },
  ];
}
