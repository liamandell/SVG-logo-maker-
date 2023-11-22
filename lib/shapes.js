class Shape{
    // Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
    
        constructor(blueColor,textColor, text){
            this.color='blueColor'
            this.text='text'
            this.textColor='textColor'
            
        }
        setColor(color){
            this.color=(color);
        
        }

    }
    // Defines a class called Triangle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Triangle extends Shape{
        constructor(blueColor,textColor, text){
            super(blueColor,textColor, text);
            this.height=height;
        }
        render() {
            return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <style>
            .shape {
                fill: #${this.blueColor};
            }
            .text {
                font: 3.5em sans-serif;
                fill: #${this.textColor};
                text-anchor: middle;
                dominant-baseline: middle;
            }
        </style>
        <polygon points = '50 200 250 200 150 0' class = 'shape'/>
        <text x = '50%' y = '70%' class = 'text'>${this.text}</text>
    </svg>`
        }
    }
    // Defines a class called Square which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Square extends Shape {
        constructor(blueColor, textColor, text) {
            super(blueColor, textColor, text)
        }
        render() {
            return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <style>
            .shape {
                fill: #${this.blueColor};
            }
            .text {
                font: 4em sans-serif;
                fill: #${this.textColor};
                text-anchor: middle;
                dominant-baseline: middle;
            }
        </style>
        <rect x = '50' y = '0' width = '200' height = '200' class = 'shape'/>
        <text x = '50%' y = '50%' class = 'text'>${this.text}</text>
    </svg>`
        }
    }
    
    
    // Defines a class called circle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Circle extends Shape{
        constructor(blueColor,textColor, text){
            super(blueColor,textColor, text);
            this.height=height;
        }
        render(){
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <circle cx="150" cy="100" r="80" fill=${this.shape}/>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.text-color}>${this.text}</text>
          
          </svg>`
        }
    }
