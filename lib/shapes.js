// create logo shape 
// make a class for shape that includes cirles squares and triangles

class Shape {
    constructor(name, color, shape) {
        this.name = name;
        this.color = color;
        this.shape = shape;

}
};
class Circle extends Shape {
    constructor(name, color, shape) {
        super(name, color, shape);
        this.name = name;
        this.color = color;
        this.shape = shape;
    }
}
class Square extends Shape {
    constructor(name, color, shape) {
        super(name, color, shape);
        this.name = name;
        this.color = color;
        this.shape = shape;
    }
}
class Triangle extends Shape {
    constructor(name, color, shape) {
        super(name, color, shape);
        this.name = name;
        this.color = color;
        this.shape = shape;
    }
}
module.exports = { Shape, Circle, Square, Triangle };
