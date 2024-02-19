class Bajaj{

    parent_variable:number=100

    bikeParentMethod():void{

        console.log("Inside Parent()")

    }


}

class Bike extends Bajaj{

    child_varaible:number=15

    bikeChildMethod():void{

        console.log("Inside Childe()")

    }

}

class Pulsar extends Bike{

    pulsar_variable:number=20

    pulsarMethod()
    {
        console.log("Inside pulsarMethod()")

    }
}

var obj_bike= new Bike()
obj_bike.bikeParentMethod()
obj_bike.bikeChildMethod()

var obj_pulsar= new Pulsar()
obj_pulsar.pulsarMethod()
