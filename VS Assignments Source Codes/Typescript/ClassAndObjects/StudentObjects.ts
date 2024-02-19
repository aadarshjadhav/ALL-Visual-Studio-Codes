class Student{

    stud_id:number
    name:string
    mark1:number
    mark2:number
    mark3:number
    percent:number

    constructor(stud_id:number, name:string, mark1:number,mark2:number, mark3:number)
    {
        
        this.stud_id=stud_id
        this.name=name
        this.mark1=mark1
        this.mark2=mark2
        this.mark3=mark3
    }

    calculaterPercentage():number
    {
        this.percent= ((this.mark1+this.mark2+this.mark3)/300)*100

        
        return this.percent
    }

    display():void{

        console.log("Student Details:")
        console.log("Student Id:"+this.stud_id)
        console.log("Student name:"+this.name)
        console.log("Student percentage:"+this.percent)
    }
}

var stud_obj = new Student(101,"Aadarsh",55,67,78)
stud_obj.calculaterPercentage()
stud_obj.display()

