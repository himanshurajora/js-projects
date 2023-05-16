class Point {
  xVel = 0;
  yVel = 0;
  xAcc = 0;
  yAcc = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    this.addVelocity();
    this.addAcceleration();
    context.beginPath();
    context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    context.fill();
  }

  setVelocity(xVel, yVel) {
    this.xVel = xVel;
    this.yVel = yVel;
  }

  addVelocity() {
    this.x += this.xVel;
    this.y += this.yVel;
  }

  setAcceleration(xAcc, yAcc) {
    this.xAcc = xAcc;
    this.yAcc = yAcc;
  }

  addAcceleration() {
    this.xVel += this.xAcc;
    this.yVel += this.yAcc;
    console.log("I was called", this.xVel, this.yVel);
  }

  toString() {
    return `Pos(x: ${this.x}, y: ${this.y}), Vel(x: ${this.xVel}, y: ${this.yVel})`;
  }
}

const container = document.getElementById("container");

const width = container.clientWidth;
const height = container.clientHeight;

const canvas = document.createElement("canvas");

canvas.width = width;
canvas.height = height;
// canvas.style.backgroundColor = "gray";

container.appendChild(canvas);

const context = canvas.getContext("2d");

let x = 0;
let y = 0;

// instance point of class point
const point = new Point(100, 650, context);
point.setVelocity(2, -10);
point.setAcceleration(0, 0.1);

function render() {
  context.clearRect(0, 0, width, height);

  context.fillText(point, 100, 100);

  if (point.y >= height - 50) {
    point.setVelocity(0, 0);
    point.setAcceleration(0, 0);
  }

  point.draw();
  y++;

  requestAnimationFrame(render);
}

render();
