//Display array in various ways

let custom_array:number[]=[23,21,12,15,1,10]

// using for loop
for(let i=0;i<custom_array.length;i++)
{
    console.log(custom_array[i])
}

// using for each loop
custom_array.forEach(cus_array=>console.log(cus_array))

//Using normal connsole.log()
console.log(custom_array)

//Using toString: The toString method converts an array to a string representation.
console.log(custom_array.toString())

//Find even numbers of elements in array
console.log("Printing array below usinng ForEach:")
custom_array.forEach((element)=>{
    if(element%2!=0)
    {
        console.log(element)
    }
})

//Reverse an Array
console.log("Original array:", custom_array);

// Reverse the array
custom_array.reverse();

console.log("Reversed array:", custom_array);

//Sum of elements of an array
var sum=0;
custom_array.forEach(element=>{

    sum+=element

})

console.log("Sum of elements:"+sum)

//Find max and min
let max_element:number=Math.max(...custom_array) // Note: ... is used to pass each elememnt individually
let min_element:number=Math.min(... custom_array)

console.log("Maximum element:"+ max_element)
console.log("Minimum element:"+ min_element)

// Merge two arrays into third array
var arrays1:string[]=['a','b','c']
var arrays2:string[]=['d','e','f']

let len_array1=arrays1.length
let len_array2= arrays2.length

var arrays3:string[]=arrays1.concat(arrays2)
console.log("Merged array:"+arrays3)




