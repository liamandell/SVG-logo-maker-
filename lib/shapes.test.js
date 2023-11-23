//example of a test that should pass
const {Triangle, Square, Circle} = require("./shapes")

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');


// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="0" y="0" height="300" width="300" fill="${color}"/>`);
    });
    });
// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="150" r="150" fill="${color}"/>`);
    });
    });

// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon points="150, 0 300, 300 0, 300" fill="${color}"/>`);
    });
    });


