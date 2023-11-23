class Shape{
    // Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // Defines a class called Triangle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Triangle extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<polygon points="150, 0 300, 300 0, 300" fill="${this.color}"/>`
        }
    }
    // Defines a class called Square which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Square extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<rect x="0" y="0" height="300" width="300" fill="${this.color}"/>`
        }
    }
    // Defines a class called circle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Circle extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<circle cx="150" cy="150" r="150" fill="${this.color}"/>`
        }
    }


    module.exports = {Triangle, Square, Circle}