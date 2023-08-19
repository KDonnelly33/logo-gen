const {Circle, Square, Triangle} = require('./shapes.js');

test("class Circle has 3 properties", ()=>{
    expect(Object.keys(new Circle("test", "red", "white")).length).toEqual(3);  
});

test("class Circle returns a circle svg shape", ()=>{
    const circle = new Circle("test", "red", "white");
    expect(circle.render()).toMatch(/circle/);
})

test("class Circle can be instantiated", ()=>{
    const circle = new Circle("test", "red", "white");
    expect(circle).toBeInstanceOf(Circle);
})

test("class Circle has property color", ()=>{
    const circle = new Circle("test", "red", "white");
    expect(circle).toHaveProperty("color", "red");
})