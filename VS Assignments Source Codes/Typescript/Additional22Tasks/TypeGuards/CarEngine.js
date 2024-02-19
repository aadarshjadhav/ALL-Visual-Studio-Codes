/*
4. Write a TypeScript class that defines a base class Car with properties like make, model,
and year, along with a start() method that prints a starting message. Now create a class
called Engine with the properties horsepower and fuelType. Modify the Car class to include
an instance of the Engine class as a property. Implement a method printCarDetails() in the
Car class that prints both car and engine details.
*/
var Engine = /** @class */ (function () {
    function Engine(horsepower, fueltype) {
        this.horsepower = horsepower;
        this.fueltype = fueltype;
    }
    return Engine;
}());
var Car3 = /** @class */ (function () {
    function Car3(make, model, year, engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
    Car3.prototype.start = function () {
        console.log("Starting...");
    };
    Car3.prototype.printCarDetails = function () {
        console.log("Car Details- Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year:").concat(this.year));
        console.log("Engine Details - Horespower:".concat(this.engine.horsepower, ", Fuel Type: ").concat(this.engine.fueltype));
    };
    return Car3;
}());
var carengine = new Engine(200, 'Gasoline');
var mycar = new Car3('BMW', 'M3 GT', 2024, carengine);
mycar.start();
mycar.printCarDetails();
