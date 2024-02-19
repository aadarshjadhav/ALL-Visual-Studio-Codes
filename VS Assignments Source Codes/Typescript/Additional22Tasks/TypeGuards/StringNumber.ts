/*
4. Write a TypeScript function that takes an argument of type string | number. 
Inside the function, use a type guard to check whether the argument is a string or a number. 
Then, log the appropriate message accordingly.  
*/


function typeChecking(temp:string | number):void{

    if(typeof temp==='string')
    {
        console.log(`This argument is of string value: ${temp}`)
    }
    else if(typeof temp==='number')
    {
        console.log(`This argument is of number value: ${temp}`)
    }
    else 
    {
         console.log('The argument has an unknown type.')
    }
}

typeChecking(201)
typeChecking("Aadarsh")