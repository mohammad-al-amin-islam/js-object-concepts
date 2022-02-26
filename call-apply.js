const student ={
    name:'rj kib',
    id:12,
    money:1000,
    treatdey:function(expense,tips){
        this.money = this.money - expense -tips;
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

student.treatdey.call(student2,100,50);
student.treatdey.call(student2,100,50);
student.treatdey.call(student3,100,50);

student.treatdey.apply(student2,[100,50]);
student.treatdey.apply(student3,[100,50]);