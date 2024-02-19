/*
Write a TypeScript class called Bus with the properties make, model, and year.
Implement a constructor that initializes these properties when a Bus object is created.
*/
var Bus2 = /** @class */ (function () {
    function Bus2(model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
    Bus2.prototype.start = function () {
        console.log("Bus is starting!");
    };
    return Bus2;
}());
var obj = new Bus2("GT2", "Mercedez", 1999);
console.log(obj);
obj.start();
