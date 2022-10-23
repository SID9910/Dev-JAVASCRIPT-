let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:24,gender:"F"},
    {name:"C" ,age:34,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:54,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
]
//some takes each value 1 by 1 nd returb a TRUE if every cb returns true
//return false only if all cb return false

//is there any valid candidate(f between 20 and 30)
let isthereAnyvalidcandidate =arr.some(function(v,i,ar){
    if(v.gender =='F' && v.age>=20 && v.age<=30){
        return true;
    }else{
         return false;
    }
});
console.log(isthereAnyvalidcandidate);