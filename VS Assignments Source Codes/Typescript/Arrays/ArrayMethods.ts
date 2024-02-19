// Array of numbers
let numbers:number[]=[2,12,14,15,4,7,8]

//Array of Strings
let names:string[]=['aadarsh', 'rohit', 'jayraj']

let mixedArray:any[]=[1,'Aadarsh',true]

let names2:Array<string>= ['Abhishek', 'Jane', 'Doe']

console.log(numbers); 
console.log(names); 
console.log(mixedArray); 

//ArrayMethods
names.pop()

names.push('Aadarsh')

// Iterating through elements
names.forEach(name=>console.log(names))


// Iterating and mapping each element to new Array: capital
let capitalnames= names.map(names=>names.toUpperCase())
console.log(capitalnames);


console.log("___ADDITIONAL METHODS OF ARRAYS___")
// Additional Methods of Arrays
let numbers2: number[] = [2, 3];
numbers2.unshift(1); // Adds 1 to the beginning
numbers2.shift();    // Removes the first element (returns 1)


//Splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

let numbers3: number[] = [1, 2, 3, 4, 5];
numbers3.splice(2, 1); // Removes 1 element at index 2

//Slice:Returns a shallow copy of a portion of an array into a new array.
let numbers4: number[] = [1, 2, 3, 4, 5];
let slicedArray = numbers.slice(1, 4); // Returns [2, 3, 4] //Specify Start and End


