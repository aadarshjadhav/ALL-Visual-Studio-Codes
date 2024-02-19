var _a;
function swapWithoutThirdVariable(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return [num1, num2];
}
// Example Usage
var a = 5;
var b = 10;
console.log("Before Swap: a =", a, "b =", b);
_a = swapWithoutThirdVariable(a, b), a = _a[0], b = _a[1];
console.log("After Swap: a =", a, "b =", b);
