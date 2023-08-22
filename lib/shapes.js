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
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);
      
    }
    render(){
        return `<rect x="60" y="20" width="180" height="180" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);

    }
    render(){  
        return `<polygon points= "150,40 60,160 240,160" fill="${this.color}" />`
    }
}
module.exports = { Circle, Square, Triangle };
