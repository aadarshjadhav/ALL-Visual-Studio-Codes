interface ICustom
{
    ic_variable:number  //interfaces are primarily used to define the structure of objects, 
                        // and they typically do not include the declaration of variables. 
                        // However, if you want to define a property with a 
                        // certain type in an interface, you can achieve that indirectly.
    ICustomMethodA():void

}

class Parent{
    
    parent_variable:number

    constructor()
    {
        this.parent_variable=20
    }
    
}

class Child extends Parent implements ICustom{
    
    child_variable:number
    
    ic_variable=10 //Variable from interface
    constructor(){
        super()
    }

    ICustomMethodA(): void {
        
    }

    additionNum():void{
        
        this.child_variable=(this.ic_variable+this.parent_variable)
        
        console.log("Addition of those two variable:"+this.child_variable)
    }


}

var child_obj= new Child()
child_obj.additionNum()