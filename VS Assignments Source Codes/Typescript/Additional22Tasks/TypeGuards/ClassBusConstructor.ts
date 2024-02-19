/*
Write a TypeScript class called Bus with the properties make, model, and year. 
Implement a constructor that initializes these properties when a Bus object is created.
*/

class Bus2{

    model:string
    make:string
    year:number

    constructor( model:string, make:string, year:number)
    {
        this.model=model
        this.make=make
        this.year=year
    }

    start():void
    {
        console.log("Bus is starting!")
    }

}

let obj= new Bus2("GT2","Mercedez",1999)

console.log(obj)

obj.start()