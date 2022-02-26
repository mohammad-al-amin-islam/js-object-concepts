const student ={
    name:'rj kib',
    id:12,
    money:1000,
    //it can hold its own this value;
    trartdeyArrow:()=>{
        console.log(this);
    },
    treatdeyInside:function(){
        const myArrow = () =>console.log(this);
        myArrow();
    },
    treatdey:function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}