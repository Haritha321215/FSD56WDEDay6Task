class Circle {
  Circle() {}
  Circle(radius) {
    this.radius = radius;
  }
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    return `Circle[radius = ${this.radius}, color = ${this.color}]`;
  }
  getArea() {
    //PI(R**2)
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    //2PI(R)
    return 2 * Math.PI * parseInt(this.radius);
  }
}

const c1 = new Circle(3, "Red");
console.log(
  `Area of the circle with radius ${c1.getRadius()}: ${c1.getArea().toFixed(2)}`
);
console.log(`Circumference of the circle: ${c1.getCircumference().toFixed(2)}`);
console.log(c1.toString());

// output
// Area of the circle with radius 3: 28.27
// Circumference of the circle: 18.85
// Circle[radius = 3, color = Red]
