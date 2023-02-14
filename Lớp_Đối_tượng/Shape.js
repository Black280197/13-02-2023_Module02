class Shape {
    color;
    filled;

    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

class Circle {
    color;
    radius;
    filled;

    constructor(radius, color, filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
}

class Rectangle {
    width;
    length;
    color;
    filled;

    constructor(width,
                length,
                color,
                filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
}

class Square {
    color;
    filled;
    side;
    constructor(color,
                filled,
                side = 1.0) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}

let shape = new Shape("red", false);

console.log(shape);

let circle = new Circle(3.5, "indigo", false);

console.log(circle);

let rectangle = new Rectangle(2.5, 3.8, "orange", true);

console.log(rectangle);

let square = new Square("yellow", true, 5.8);

console.log(square);

console.log(circle.getArea());