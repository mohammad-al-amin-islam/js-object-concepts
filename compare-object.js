const first = {a:1,b:3}
const second = {a:1,b:3}
//third will be same because there referrences are same;
const third = first;

//in this way we cant compare because object check its referrence

if(first === third){
    //console.log('its same')
}
else{
    //console.log('its not same');
}

//we can compare using stringify but it wont work when its order change
const first2 = {a:2,b:3}
const second2 = {b:3,a:1}
if(JSON.stringify(first2) === (JSON.stringify(second2))){
    //console.log('its same');
}
else{
    //console.log('its not same')
}


//to solve we have to use for in but it wont work on sting
function compareValue(first,second){
    if(Object.keys(first).length !== Object.keys(second).length){
        return false;
    }
    for(const key in first){
        if (first[key] !== second[key])
        {
            return false;
        }
    }
    return true;
}

const result = compareValue(first2,second2);
console.log(result);