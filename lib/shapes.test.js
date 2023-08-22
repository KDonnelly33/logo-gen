const {Circle, Square, Triangle} = require('./shapes.js');

test("class Circle returns a circle svg shape", ()=>{
    const circle = new Circle("test", "red", "white");
    expect(circle.render()).toMatch(/circle/);
})
test("class Square returns a square svg shape", ()=>{
    const square = new Square("test", "red", "white");
    expect(square.render()).toMatch(/rect/);
})
test("class Triangle returns a triangle svg shape", ()=>{
    const triangle = new Triangle("test", "red", "white");
    expect(triangle.render()).toMatch(/polygon/);
})
