/*
9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green',
'White' and Blue. Create a variable 'selectedColor' of type 'Color' and
assign it one of the enumeration values.
*/
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["White"] = "White";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Blue;
console.log("Select colour is ".concat(selectedColor));
console.log("Select colour is " + selectedColor); //Correct output??
