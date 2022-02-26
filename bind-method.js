const student ={
    name:'rj kib',
    id:12,
    money:1000,
    treatdey:function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
const student2 = {
    name:'rj dib',
    id:12,
    money:1500,
}
const student3 = {
    name:'rj sib',
    id:12,
    money:1900,
}
student.treatdey(100);

const student2TreatDey = student.treatdey.bind(student2);
student2TreatDey(600);
const student3TreatDey = student.treatdey.bind(student3);
student3TreatDey(1000);
