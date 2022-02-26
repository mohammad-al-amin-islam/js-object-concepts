const mobile = {
    name:'poco',
    price:1234,
    isPerfect:true
}

//for array we use for of loop

// for object we use for in
for(const prop in mobile){
   // console.log(prop,mobile[prop]);
}

//to get value using for of
const keys = Object.keys(mobile);
for(const key of keys){
    //console.log(key,mobile[key]);
}

//using destrucing and entries
for(const [key,value] of Object.entries(mobile)){
    console.log(key,value)
}
