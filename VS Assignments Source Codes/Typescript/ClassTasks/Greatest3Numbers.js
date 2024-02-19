function findGreatest3Number() {
    var number1 = 10;
    var number2 = 15;
    var number3 = 8;
    var greatnum = 0;
    if (number1 > number2 && number1 > number3) {
        greatnum = number1;
    }
    else if (number2 > number1 && number2 > number3) {
        greatnum = number2;
    }
    else {
        greatnum = number3;
    }
    console.log(greatnum);
}
findGreatest3Number();
