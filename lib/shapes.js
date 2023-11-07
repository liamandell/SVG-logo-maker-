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
            return `<div style="border-top:${this.height}px solid transparent;border-right:${this.height}px solid ${this.color};"></div>`
        }
    }
    // Defines a class called Square which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Square extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<div style="width:${this.height}px;height:${this.height}px;background-color:${this.color};"></div>`
        }
    }
    // Defines a class called circle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Circle extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<div style="border-radius:50%;width:${this.height}px;height:${this.height}px;background-color:${this.color};"></div>`
        }
    }