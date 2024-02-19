function divisible511(x) {
    var check = false;
    if (x % 5 == 0 && x % 11 == 0) {
        check = true;
    }
    return check;
}
var ret_check = divisible511(10);
console.log(ret_check);
