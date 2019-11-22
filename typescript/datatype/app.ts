let myName : string = "ram";
console.log(myName, typeof myName);

let age : number;
console.log(age, typeof age)

let mobileNumber: number = 92199328292;
console.log(mobileNumber ,typeof mobileNumber)

let address;
address ="faltno. 67";
address = 435367;
console.log(address , typeof address)

let calAge = function() : void{
    console.log("age is 26")
}
    
calAge();
//creating class and using inheritance

class Person {
    constructor(public name : string, public age :number){

    }
}
let person1 = new Person('ram',22);
console.log(person1);



class Student extends Person{
    constructor(name :string , age :number, public rollNo : number)
    {
        super(name, age);
    }
}
let student1 = new Student('john',25,14)

console.log(student1);