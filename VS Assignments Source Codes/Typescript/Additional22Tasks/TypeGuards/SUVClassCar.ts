/*
3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. 
Add a property to represent whether the SUV is suitable for off-road driving. 
Implement a method that toggles off-road capability and prints a message accordingly.  
*/

class Car{

    make:string
    model:string

    constructor(make:string, model:string)
    {
        this.make = make;
        this.model = model;
    }

    displayInfo():void{

        console.log(`Car - Make: ${this.make}, Model: ${this.model}`)
    }
}

class SUV extends Car{

    offRoadCapable:boolean

    constructor(make: string, model: string, offRoadCapable: boolean)
    {
        super(make,model)
        this.offRoadCapable=offRoadCapable
    }

    toggleOffRoadCapability():void{

        this.offRoadCapable=!this.offRoadCapable //Toggling it OFF and ON

        let message= this.offRoadCapable?"Off-Road is On":" Off-Road is Off"
        
        console.log(`SUV- Make: ${this.make}, Model: ${this.model}, ${message}`)

    }

   
}

var suv_obj= new SUV('Jeep', 'Compact',true)

suv_obj.displayInfo()
suv_obj.toggleOffRoadCapability()
suv_obj.toggleOffRoadCapability()