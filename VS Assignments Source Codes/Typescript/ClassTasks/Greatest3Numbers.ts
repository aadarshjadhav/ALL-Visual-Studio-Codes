
function findGreatest3Number(){

    let number1=10
    let number2=15
    let number3=8
    let greatnum=0

    if(number1>number2 && number1>number3)
    {
        greatnum=number1
    }
    else if(number2>number1 && number2>number3)
    {
        greatnum=number2
    }
    else
    {
        greatnum=number3
    }

    console.log(greatnum)

}

findGreatest3Number()
