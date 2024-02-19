/*
9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 
'White' and Blue. Create a variable 'selectedColor' of type 'Color' and 
assign it one of the enumeration values.  
*/

enum Color{
    Red="Red",
    Green="Green",
    White="White",
    Blue="Blue"
}

let selectedColor: Color=Color.Blue

console.log(`Select colour is ${selectedColor}`)

console.log("Select colour is "+selectedColor) //Correct output??