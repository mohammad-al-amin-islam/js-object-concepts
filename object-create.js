//1.simple way to create object
const student = {name:'habul',roll:10};
//console.log(student);
//2. using object construtor
const person = new Object();
//console.log(person);
//3.
// const human = Object.create(null);
const human = Object.create(student);
//console.log(human);

//4.syntycal sugar
class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const people = new People('sabul',12);
//console.log(people); 

// function 
function Manus(name){
    this.name = name;
}
 const man = new Manus('sader');
 console.log(man);