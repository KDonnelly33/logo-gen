// create logo shape 
// make a class for shape that includes cirles squares and triangles

class Shape {
    constructor(name, color, textColor) {
        this.name = name;
        this.color = color;
        this.textColor = textColor;
    }
        generateSVG() {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="40" dy=".3em">${this.name}</text> </svg>`
        }
}

class Circle extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);
    }
    render(){
        return `<circle cx="50%" cy="50%" r="40%" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);
      
    }
    render(){
        return `<rect width="80%" height="80%" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);

    }
    render(){  
        return `<polygon points="50%, 10% 10%, 90% 90%, 90%" fill="${this.color}" />`
    }
}
module.exports = { Circle, Square, Triangle };
