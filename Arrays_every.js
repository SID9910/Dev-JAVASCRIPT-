

 let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:44,gender:"F"},
    {name:"C" ,age:44,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:54,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
]


//if every  callback return true then "every" return true otherwise false
// are all female candidates valid 
let everyallfemale =arr.filter(v =>v.gender =='F').every(v =>v.age>=20 && v.age<=30);
console.log(everyallfemale);