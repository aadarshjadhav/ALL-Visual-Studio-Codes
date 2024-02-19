/*
3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class.
Add a property to represent whether the SUV is suitable for off-road driving.
Implement a method that toggles off-road capability and prints a message accordingly.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.displayInfo = function () {
        console.log("Car - Make: ".concat(this.make, ", Model: ").concat(this.model));
    };
    return Car;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(make, model, offRoadCapable) {
        var _this = _super.call(this, make, model) || this;
        _this.offRoadCapable = offRoadCapable;
        return _this;
    }
    SUV.prototype.toggleOffRoadCapability = function () {
        this.offRoadCapable = !this.offRoadCapable;
        var message = this.offRoadCapable ? "Off-Road is On" : " Off-Road is Off";
        console.log("SUV- Make: ".concat(this.make, ", Model: ").concat(this.model, ", ").concat(message));
    };
    return SUV;
}(Car));
var suv_obj = new SUV('Jeep', 'Compact', true);
suv_obj.displayInfo();
suv_obj.toggleOffRoadCapability();
suv_obj.toggleOffRoadCapability();
