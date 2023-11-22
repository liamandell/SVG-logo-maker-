const { Square, Circle, Triangle } = require('./shapes');

//example of a test that should pass
//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
    });
// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="150" r="80" fill="${color}">`);
    });
    });

// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}">`);
    });
    });

// Path: lib/shapes.js


