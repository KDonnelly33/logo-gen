// call inqu
const inquirer = require('inquirer');
// call fs
const fs = require('fs');
// call jest    
const jest = require('jest');
// call shapes js
const { Shape, Circle, Square, Triangle } = require('./lib/shapes.js');
// questions for user input
const questions = [
    // text input for logo
    {
        type: 'input',
        name: 'text',
        message: 'Please provide up to 3 characters for your logo.',
        validate: input => {
            if (input.length > 3) {
                return 'Please provide up to 3 characters for your logo.';
            }
            return true;
        }
    },
    // color input for logo
    {
        type: 'input',
        name: 'color',
        message: 'Please select a color for your logo.',
    },
    // shape input for logo
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo.',
        choices: ['square', 'circle', 'triangle'],
    },
];

// function to generate logo
function generateLogo(logo) {
    const svgContent = logo.generateSVG()
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}



// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            let logo;
            if (response.shape === 'square') {
                logo = new Square(response.text, response.color,"white");
            } else if (response.shape === 'circle') {
                logo = new Circle(response.text, response.color,"white");
            } else if (response.shape === 'triangle') {
                logo = new Triangle(response.text, response.color,"white");
            }
            console.log(logo);
            generateLogo(logo);
        })
}
init();
