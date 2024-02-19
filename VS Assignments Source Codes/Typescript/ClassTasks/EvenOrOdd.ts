function EvenOdd(x:number)
{
    let check_num
    if(x%2==0)
    {
        check_num="Even"
    }
    else
    {
        check_num="Odd"
    }
    return check_num
}

var get_result=EvenOdd(3)

console.log(get_result)