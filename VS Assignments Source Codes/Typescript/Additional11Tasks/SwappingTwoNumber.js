//8.write function for swapping of 2 numbers
var _a;
function swapNumber(num1, num2) {
    var temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    return [num1, num2];
}
var num1 = 10;
var num2 = 20;
var message = "Before Swapping";
console.log(message);
console.log(num1);
console.log(num2);
_a = swapNumber(num1, num2), num1 = _a[0], num2 = _a[1];
var message2 = "After Swapping";
console.log(message2);
console.log(num1);
console.log(num2);
