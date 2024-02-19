function swapWithoutThirdVariable(num1: number, num2: number): [number, number] {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    return [num1, num2];
}

// Example Usage
let a: number = 5;
let b: number = 10;

console.log("Before Swap: a =", a, "b =", b);

[a, b] = swapWithoutThirdVariable(a, b);

console.log("After Swap: a =", a, "b =", b);