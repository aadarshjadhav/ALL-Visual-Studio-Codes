//4.write code to display every alternate even no between 1 to 20
var count = 0;
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
        i++;
    }
}
