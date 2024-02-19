//write code to display no between 1 to 50 if no is divisible by 3 then display 
//'welcome' if no is divisible by 6 then display 'pune'

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 6 === 0) {
        console.log("Welcome to Pune");
    } else if (i % 6 === 0) {
        console.log("Pune");
    } else if (i % 3 === 0) {
        console.log("Welcome");
    } else {
        console.log(i);
    }
}