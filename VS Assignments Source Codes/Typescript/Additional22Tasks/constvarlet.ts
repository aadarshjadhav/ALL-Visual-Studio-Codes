let outside_fun_number_let:number=20
var outside_fun_number_var:number=30
const outside_fun_number_const:number=35


function scopeChecker()
{
    let inside_fun_number_let:number=15
    var inside_fun_number_var:number=20
    const inside_fun_number_const:number=18

    if(true)
    {
        let inside_if_number_let:number=15
        var inside_if_number_var:number=20
        const inside_if_number_const:number=18

        // let inside_if_number_let:number=15       //LET:Cannot redeclare block-scoped variable
        // var inside_if_number_var:number=20       //VAR:Can redeclare block-scoped variable
        // const inside_if_number_const:number=18   //CONST:Cannot redeclare block-scoped variable

        inside_if_number_let=15 
        inside_if_number_var=20 
        inside_if_number_const=18                   //Cannot reassign to 'inside_if_number_const' because it is a constant

    }

    console.log(inside_if_number_let)   //let:Cannot access outside the if block, so, only blcok scope
    console.log(inside_if_number_var)
    console.log(inside_if_number_const) //CONST:Cannot access outside the if block, so, only blcok scope

}

inside_fun_number_var=20                //Variables declared with var have function scope (or global scope if declared outside any function).
                                        //They are not block-scoped, meaning they are accessible throughout the entire function in which they are declared, regardless of any block (like if or for).s
inside_fun_number_const=18              
                                        //Variables declared with var are also subject to hoisting, where the declaration is moved to the top of the function or global context during compilation.

/*
const:

    Variables declared with const have block scope, just like let.
    They are accessible only within the block (or function) where they are defined.
    const variables must be initialized at the time of declaration 
    and cannot be reassigned after initialization.
*/

scopeChecker()



