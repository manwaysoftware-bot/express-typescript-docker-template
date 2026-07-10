//Annotation
//Any annotation only applicale classes proprtirs and function only can applicable
//Also that class have same strture .that means class have same function names conains.and class property not contains contains with simlar name a
//All declarater before propejct run assened
//Class level annotation
function classdec(cls:any){
        return A
}


class A{
     
    name:string="";

    constructor(){
        console.log("A")
    }

    a(){

    }

}

@classdec
class B{

    name:any="";

     constructor(){
        console.log("B")
    }

}

//Function level
//
function fundec(target:any,propertyKey:any,dec:PropertyDescriptor){
    console.log("function level")
}

class C{

     constructor(){
        console.log("c")
    }


    
    a(){

    }


}


//Propery level
let values=new WeakMap<any,any>();
function propdec(target:any,propertyKey:any){



    Object.defineProperty(target,propertyKey,{
        //dont use arrow function
        set:function(val:any){
            values.set(this,val);
        },
        get:function(){
            return values.get(this)||"ragul";
        },
        enumerable:true,
        configurable:true
    })
}

class D{

    @propdec
    declare name:string|undefined;

     constructor(){
        console.log("c")
    }

    a(){

    }


}
