// function Person(name,age){
//     this.name= name;
//     this.age=age;
//     console.log(this)
// }
// Person.prototype.talk=()=>{
//     console.log(`My name is ${this.name} and I am ${this.age} old`);
// };
// let p1=Person("piyush",40);
// let p2=Person("Naman",90);
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk1(){
        console.log(`My name is ${this.name}`)
    }
}
class employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary=this.salary;
    }
    talk2(){
        console.log("I am an employee of JP Morgon Co.");
    }
}
let p1= new Person("kishore",50);
let p2= new employee("Arnav",50,90000);
p2.talk1();
p2.talk2();
