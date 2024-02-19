// Array of numbers
var numbers = [2, 12, 14, 15, 4, 7, 8];
//Array of Strings
var names = ['aadarsh', 'rohit', 'jayraj'];
var mixedArray = [1, 'Aadarsh', true];
var names2 = ['Abhishek', 'Jane', 'Doe'];
console.log(numbers);
console.log(names);
console.log(mixedArray);
//ArrayMethods
names.pop();
names.push('Aadarsh');
// Iterating through elements
names.forEach(function (name) { return console.log(names); });
var capitalnames = names.map(function (names) { return names.toUpperCase(); });
console.log(capitalnames);
