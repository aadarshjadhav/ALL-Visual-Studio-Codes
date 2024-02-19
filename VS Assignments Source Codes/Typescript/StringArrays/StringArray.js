var StringReverse = /** @class */ (function () {
    function StringReverse() {
    }
    StringReverse.prototype.strReverse = function (str) {
        var word = "";
        for (var i = str.length - 1; i >= 0; i--) {
            word = word + str.charAt(i);
        }
        return word;
    };
    StringReverse.prototype.strPattern = function (str) {
        var temp_array = str.split(" ");
        for (var i = 0; i < temp_array.length; i++) {
            var word = "";
            for (var j = 0; j <= i; j++) {
                word = word + temp_array[j] + " ";
            }
            console.log(word);
        }
    };
    return StringReverse;
}());
var s = new StringReverse();
console.log(s.strReverse("Hello"));
s.strPattern("I like India");
