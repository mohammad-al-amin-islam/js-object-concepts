//object value can be any data type like array,function(),

const student ={
    name:'rj kib',
    id:12,
    money:1000,
    major:'geo',
    subjects:['bangla','english','math'],
    bestFrined:{
        name:'motin',
        major:'mathematics'
    },
    takeExam:function(){
        console.log(this.name,'given exam');
    },
    tratdey:function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

const remaining = student.tratdey(100);
console.log(remaining);
