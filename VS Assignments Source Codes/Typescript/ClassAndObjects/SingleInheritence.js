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
var Bajaj = /** @class */ (function () {
    function Bajaj() {
        this.parent_variable = 100;
    }
    Bajaj.prototype.bikeParentMethod = function () {
        console.log("Inside Parent()");
    };
    return Bajaj;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.child_varaible = 15;
        return _this;
    }
    Bike.prototype.bikeChildMethod = function () {
        console.log("Inside Childe()");
    };
    return Bike;
}(Bajaj));
var Pulsar = /** @class */ (function (_super) {
    __extends(Pulsar, _super);
    function Pulsar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pulsar_variable = 20;
        return _this;
    }
    Pulsar.prototype.pulsarMethod = function () {
        console.log("Inside pulsarMethod()");
    };
    return Pulsar;
}(Bike));
var obj_bike = new Bike();
obj_bike.bikeParentMethod();
obj_bike.bikeChildMethod();
var obj_pulsar = new Pulsar();
obj_pulsar.pulsarMethod();
