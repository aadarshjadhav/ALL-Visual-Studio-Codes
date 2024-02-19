/*
4. Write a TypeScript class that defines a base class Car with properties like make, model, 
and year, along with a start() method that prints a starting message. Now create a class 
called Engine with the properties horsepower and fuelType. Modify the Car class to include 
an instance of the Engine class as a property. Implement a method printCarDetails() in the 
Car class that prints both car and engine details. 
*/


class Engine{

    horsepower: number
    fueltype:string

    constructor(horsepower: number, fueltype: string) {
        this.horsepower = horsepower;
        this.fueltype = fueltype;
    }
}

class Car3{

    make:string
    model:string
    year:number

    engine:Engine //Instance of Engine in Car Class

    constructor( make:string, model:string, year:number, engine:Engine)
    {
        this.make=make
        this.model=model
        this.year=year
        this.engine=engine
    }

    start():void{

        console.log("Starting...")

    }

    printCarDetails():void{

        console.log(`Car Details- Make: ${this.make}, Model: ${this.model}, Year:${this.year}`);
        console.log(`Engine Details - Horespower:${this.engine.horsepower}, Fuel Type: ${this.engine.fueltype}`)
    }
    
}

let carengine= new Engine(200,'Gasoline')
let mycar= new Car3('BMW','M3 GT',2024,carengine)

mycar.start()
mycar.printCarDetails()