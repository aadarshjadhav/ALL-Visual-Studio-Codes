//8.write function for swapping of 2 numbers

function swapNumber(num1:number, num2:number)
{
    let temp:number

    temp=num1
    num1=num2
    num2=temp
    return [num1,num2]
}



let num1=10
let num2=20
let message: string = "Before Swapping";
console.log(message);
console.log(num1);
console.log(num2);

[num1,num2]=swapNumber(num1,num2)

let message2: string = "After Swapping";
console.log(message2);
console.log(num1);
console.log(num2);




