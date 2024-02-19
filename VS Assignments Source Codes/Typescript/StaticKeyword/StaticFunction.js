var PersonA = /** @class */ (function () {
    function PersonA() {
    }
    PersonA.methodA = function () {
        return PersonA.digit;
    };
    PersonA.digit = 10;
    return PersonA;
}());
var p_obj = new PersonA();
console.log(PersonA.methodA());
