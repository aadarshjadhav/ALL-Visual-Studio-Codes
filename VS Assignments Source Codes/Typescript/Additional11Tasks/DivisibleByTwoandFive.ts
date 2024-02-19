// write code to display Numbers between 1 to 30 if the number is divisible by 2 
//and 5 then stop display further nos.

for(let i=1;i<30;i++)
{
    console.log(i)

    if(i%2==0 && i%5==0)
    {
        break
    }
}