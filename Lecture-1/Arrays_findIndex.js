

 let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:44,gender:"F"},
    {name:"C" ,age:44,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:68,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
];
//find  gives value against first true ,is there is no true then -1


// are all female candidates valid 
let isAnyvalidcandidate =arr.findIndex(function(v,i,ar){
    if(v.gender =='F' && v.age>=20 && v.age<=30){
        return true;
    }else{
         return false;
    }
});
console.log(isAnyvalidcandidate);