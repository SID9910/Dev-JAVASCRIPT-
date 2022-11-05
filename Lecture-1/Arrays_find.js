

 let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:24,gender:"F"},
    {name:"C" ,age:24,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:28,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
];
//find  gives value against first true ,is there is no true then undefined


// are all female candidates valid 
let isAnyvalidcandidate =arr.find(function(v,i,ar){
    if(v.gender =='F' && v.age>=20 && v.age<=30){
        return true;
    }else{
         return false;
    }
});
if(isAnyvalidcandidate!=-1){
console.log(isAnyvalidcandidate.name+" @ "+isAnyvalidcandidate.age +" # "+isAnyvalidcandidate.gender);
}else{
    console.log("not found");
}