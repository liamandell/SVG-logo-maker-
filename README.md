# SVG-logo-maker-
## video
<video width="320" height="240" controls>
  <source src="/Users/liamandell/Downloads/Challenge 10.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Overview
This command-line application allows users to generate a customized SVG logo. Users can input text, choose text color, select a shape (circle, triangle, or square), and specify the shape's color. The application will create an SVG file named logo.svg based on the provided input.

## Table of Contents
Features
Getting Started
Installation
Running the Application
Usage
Output
Example
Contributing
License
Acknowledgments
Features
1. Input Text
Users can enter up to three characters for the logo text.
2. Text Color
Users can enter a color keyword or a hexadecimal number for the text color.
3. Choose Shape
Users are presented with a list of shapes to choose from: circle, triangle, and square.
4. Shape Color
Users can enter a color keyword or a hexadecimal number for the selected shape's color.
5. SVG File Generation
When all prompts are filled, an SVG file named logo.svg is created.
6. Command Line Output
The application prints "Generated logo.svg" in the command line.
Getting Started
Installation
Clone this repository to your local machine.

bash
Copy code
git clone https://github.com/yourusername/svg-logo-generator.git
Navigate to the project directory.

bash
Copy code
cd svg-logo-generator
Install the required dependencies.

bash
Copy code
npm install
Running the Application
Execute the following command in the terminal to start the application.

bash
Copy code
node app.js
Usage
Enter up to three characters for the logo text.
Enter a color keyword or a hexadecimal number for the text color.
Choose a shape from the presented list: circle, triangle, or square.
Enter a color keyword or a hexadecimal number for the selected shape's color.
Output
An SVG file named logo.svg will be created in the project directory.
The command line will print "Generated logo.svg."
Example
bash
Copy code
$ node app.js
? Enter text (up to three characters): ABC
? Choose text color (color keyword or hexadecimal): #FF5733
? Choose a shape: (Use arrow keys)
❯ Circle
  Triangle
  Square
? Choose shape color (color keyword or hexadecimal): blue
Generated logo.svg
Contributing
If you'd like to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix.
Make changes and commit them with descriptive commit messages.
Push your changes to your fork.
Submit a pull request, detailing the changes you've made.
License
This project is licensed under the MIT License.

Acknowledgments
This application was created as part of a project/task related to.