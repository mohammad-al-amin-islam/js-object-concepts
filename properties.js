const mobile = {
    name:'poco',
    price:1234,
    isPerfect:true
}
//it will give only the keys
const keys = Object.keys(mobile);
// console.log(keys);

//it will give only the values
const  values = Object.values(mobile);
// console.log(values);

//it will give the whole proreties in array
const poperties = Object.entries(mobile);
// console.log(poperties);

//it will not do to delete but can do update
/* Object.seal(mobile);
mobile.isPerfect = false; */
/* //its also dont do add
mobile.add = 'add'; */

//itt will not do add + update + remove;
Object.freeze(mobile);
mobile.isPerfect = false;
mobile.add = 'add'

//delete the properties
delete mobile.isPerfect;
console.log(mobile);