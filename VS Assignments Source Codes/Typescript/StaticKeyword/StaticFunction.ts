class PersonA{

    static digit:number=10;

    static methodA():number{

        return PersonA.digit
    }
}

let p_obj=new PersonA()
console.log(PersonA.methodA())