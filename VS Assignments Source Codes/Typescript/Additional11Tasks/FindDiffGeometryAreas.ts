//9.write function to calculate area of circle,triagle,rectangle ,sequare

function areaCircle(radius:number):number{

    return Math.PI* Math.pow(radius,2)
}

function areaTriangle(base:number,height:number):number
{
    return 0.5*base *height   
}

function areaRectangle(length:number, width:number):number
{
    return length*width
}

function areaSquare(side:number):number
{
    return Math.pow(side,2)
}

let circleradius: number = 5;
let trianglebase: number = 4;
let triangleheight: number = 8;
let rectanglelength: number = 6;
let rectanglewidth: number = 10;
let squareside: number = 7;

console.log("Area of Circle:", areaCircle(circleradius));
console.log("Area of Triangle:", areaTriangle(trianglebase, triangleheight));
console.log("Area of Rectangle:", areaRectangle(rectanglelength, rectanglewidth));
console.log("Area of Square:", areaSquare(squareside));