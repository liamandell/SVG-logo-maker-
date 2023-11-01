const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
// Imports the graceful-fs, inquirer, Circle, Square, and Triangle modules.
// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

// Defines array of 'questions' using the 'inquirer' library with the following questions.
// Each question is an object that specifies the properties of TEXT, TEXT COLOR, SHAPE COLOR, and Pixel Image.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}
