var outside_fun_number_let = 20;
var outside_fun_number_var = 30;
var outside_fun_number_const = 35;
function scopeChecker() {
    var inside_fun_number_let = 15;
    var inside_fun_number_var = 20;
    var inside_fun_number_const = 18;
    if (true) {
        var inside_if_number_let = 15;
        var inside_if_number_var = 20;
        var inside_if_number_const = 18;
    }
    console.log("inside_if_number_let");
    console.log("inside_if_number_var");
    console.log("inside_if_number_const");
}
scopeChecker();
