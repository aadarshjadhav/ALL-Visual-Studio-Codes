//3.write code to count odd numbers between 11 to 21
var count = 0;
for (var i = 11; i <= 21; i++) {
    if (i % 2 != 0) {
        count = count + 1;
        console.log(i);
    }
}
console.log(count);
