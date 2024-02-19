abstract class Shape{

   abstract calculateArea():number

   displayArea():void{

    let area =this.calculateArea();
    console.log(`Area: ${area}`)

   }
}

// Concrete subclass that extends the abstract class
class Circle extends Shape{

    radius:number;

    constructor(radius:number)
    {
        super();
        this.radius=radius;

    }

    calculateArea(): number {
        
        return Math.PI* this.radius * this.radius;

    }
}

class Rectangle extends Shape{

    width:number
    height:number

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
      }

    calculateArea(): number {
        return this.width * this.height;
    }
    
}

var circle= new Circle(5)
circle.displayArea() //This funnctiton is called from abstract

var rectangle= new Rectangle(7,5)
rectangle.displayArea() //This funnctiton is called from abstract
