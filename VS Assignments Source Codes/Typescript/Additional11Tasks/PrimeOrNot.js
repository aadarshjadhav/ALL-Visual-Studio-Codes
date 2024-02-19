var number = 6;
var str = "";
var count = 0;
for (var j = 2; j < number; j++) {
    if (number % j == 0)
        count++;
}
if (count == 0) {
    str = "Nummber is prime";
    console.log(str);
}
else {
    str = "Nummber is NOT prime";
    console.log(str);
}
