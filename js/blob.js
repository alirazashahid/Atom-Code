let canvas, ctx;
let blob;

class Blob {
  constructor() {
    this.points = [];
  }

  init() {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this);
      this.push(point);
    }
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.points[0].solveWith(this.points[this.numPoints - 1], this.points[1]);
    let p0 = this.points[this.numPoints - 1].position;
    let p1 = this.points[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < this.numPoints; i++) {
      this.points[i].solveWith(this.points[i - 1], this.points[i + 1] || this.points[0]);

      let p2 = this.points[i].position;
      let xc = (p1.x + p2.x) / 2;
      let yc = (p1.y + p2.y) / 2;

      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

      p1 = p2;
    }

    let xc = (p1.x + _p2.x) / 2;
    let yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.stroke();

    requestAnimationFrame(this.render.bind(this));
  }

  push(point) {
    if (point instanceof Point) {
      this.points.push(point);
    }
  }

  get color() {
    return this._color || "#ff9800";
  }

  get numPoints() {
    return this._numPoints || 32;
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints;
  }

  get center() {
    return { x: canvas.width / 2, y: canvas.height / 2 };
  }

  get radius() {
    return Math.min(canvas.width, canvas.height) / 3;
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = azimuth;
    this.radialEffect = 0;
    this.speed = 0;
    this.acceleration = -0.3 + Math.random() * 0.6;
  }

  solveWith(left, right) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (left.radialEffect - this.radialEffect) +
        (right.radialEffect - this.radialEffect)) *
        0.1 -
      this.speed * 0.05;
  }

  get position() {
    let radius = this.parent.radius + this.radialEffect;
    return {
      x: this.parent.center.x + Math.cos(this.azimuth) * radius,
      y: this.parent.center.y + Math.sin(this.azimuth) * radius,
    };
  }
}

function init() {
  const container = document.getElementById("blob-container");

  canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  container.appendChild(canvas);

  blob = new Blob();
  blob.init();
  blob.render();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

init();
