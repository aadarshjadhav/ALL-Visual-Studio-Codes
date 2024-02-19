//Display array in various ways
var custom_array = [23, 21, 12, 15, 1, 10];
// using for loop
for (var i = 0; i < custom_array.length; i++) {
    console.log(custom_array[i]);
}
// using for each loop
custom_array.forEach(function (cus_array) { return console.log(cus_array); });
//Using normal connsole.log()
console.log(custom_array);
//Using toString: The toString method converts an array to a string representation.
console.log(custom_array.toString());
//Find even numbers of elements in array
console.log("Printing array below usinng ForEach:");
custom_array.forEach(function (element) {
    if (element % 2 != 0) {
        console.log(element);
    }
});
//Reverse an Array
console.log("Original array:", custom_array);
// Reverse the array
custom_array.reverse();
console.log("Reversed array:", custom_array);
//Sum of elements of an array
var sum = 0;
custom_array.forEach(function (element) {
    sum += element;
});
console.log("Sum of elements:" + sum);
//Find max and min
var max_element = Math.max.apply(Math, custom_array); // Note: ... is used to pass each elememnt individually
var min_element = Math.min.apply(Math, custom_array);
console.log("Maximum element:" + max_element);
console.log("Minimum element:" + min_element);
// Merge two arrays into third array
var arrays1 = ['a', 'b', 'c'];
var arrays2 = ['d', 'e', 'f'];
var len_array1 = arrays1.length;
var len_array2 = arrays2.length;
var arrays3 = arrays1.concat(arrays2);
console.log("Merged array:" + arrays3);
