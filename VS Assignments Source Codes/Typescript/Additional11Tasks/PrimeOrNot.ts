//5.write code to check no is prime or not

var number=6;
var str=""
var count=0
for(let j=2;j<number;j++)
{
    if(number%j==0)
        count++
}

if(count==0)
{
    str="Nummber is prime"
    console.log(str)
}
else
{
    str="Nummber is NOT prime"
    console.log(str)
}
