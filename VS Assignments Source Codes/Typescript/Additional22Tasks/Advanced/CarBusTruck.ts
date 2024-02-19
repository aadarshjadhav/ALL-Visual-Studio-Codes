/* 
3. Write a TypeScript program that defines a TypeScript interface Car with properties 
make and model of type string. Create a type Bus with properties make and model of type string 
and an additional property payloadCapacity of type number. 
Now, create a type Vehicle that represents either a Car or a Truck using a union type.  
*/

// Define the Car interface
interface Car{

    make:string
    model:string
}

// Define the Bus type
type Bus={
    make:string
    model:string
    payloadcapacity:number
}

// Alias for Truck as Bus
type Truck=Bus

// Define the Vehicle type using a union type
type Vehicle= Car | Truck

let sedan:Car={make:"BWM", model:"GT"}
let citybus: Bus={make:"Mercendez", model:"Bharat Benz", payloadcapacity:200}


function displayVehicleInfo(vehicle: Vehicle):void{

    if("payloadcapacity" in vehicle)
    {
        console.log(`Bus - Make: ${vehicle.make}, Model: ${vehicle.model}, Payload Capacity: ${vehicle.payloadcapacity}`);
    }
    else
    {
        console.log(`Car - Make: ${vehicle.make}, Model: ${vehicle.model}`)
    }
}


// Display information for different vehicles
displayVehicleInfo(sedan);
displayVehicleInfo(citybus);
