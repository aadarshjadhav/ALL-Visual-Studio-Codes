class StringReverse{

    strReverse(str:string):string
    {
        let word:string=""

        for(let i=str.length-1;i>=0;i--)
        {
            word=word+str.charAt(i)
            
        }
        return word
    }

    strPattern(str:string):void
    {
        let temp_array=str.split(" ")
        for(let i=0;i<temp_array.length;i++)
        {
            let word:string=""
            for(let j=0;j<=i;j++)
            {
               word=word+temp_array[j]+" "
               
            }
            console.log(word)
        }
        
    }
}

let s=new StringReverse()

console.log(s.strReverse("Hello"))
s.strPattern("I like India")