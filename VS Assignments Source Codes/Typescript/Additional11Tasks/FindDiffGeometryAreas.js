//9.write function to calculate area of circle,triagle,rectangle ,sequare
function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
function areaTriangle(base, height) {
    return 0.5 * base * height;
}
function areaRectangle(length, width) {
    return length * width;
}
function areaSquare(side) {
    return Math.pow(side, 2);
}
var circleradius = 5;
var trianglebase = 4;
var triangleheight = 8;
var rectanglelength = 6;
var rectanglewidth = 10;
var squareside = 7;
console.log("Area of Circle:", areaCircle(circleradius));
console.log("Area of Triangle:", areaTriangle(trianglebase, triangleheight));
console.log("Area of Rectangle:", areaRectangle(rectanglelength, rectanglewidth));
console.log("Area of Square:", areaSquare(squareside));
