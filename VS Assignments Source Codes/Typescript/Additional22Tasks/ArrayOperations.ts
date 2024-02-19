/*
8. Write a TypeScript program that declares an array of a specific data type. 
It will demonstrates common array operations like adding elements, removing elements, 
and iterating through the array.  
*/

let numbers:number[]=[1,2,3,4,5]

//Add elelments
numbers.push(6) //Adds 6 to the end of the array
numbers.unshift(0) //Adds 0 to the beginning of the array

//Remove the elements
numbers.pop() //Removes the last element(6)
numbers.shift() //removes the first element(0)

//Iterate through the array using a for loop
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i])
}

// Iterate through the array using the for ... of loop
for(let number_each of numbers)
{
    console.log(number_each)
}

//Acess elements by index
let firstnum= numbers[0]
let lastnum= numbers[length-1]

//check element exists
let hasnum3=numbers.includes(3)

//Find the index of an element
let index_of_num_4= numbers.indexOf(4)

//Sort the array
numbers.sort((a,b)=> a-b) //Sort in asscendinng order

//Reverse the array
numbers.reverse();

