//humme females ki ages nikalni hai bss     
let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:24,gender:"F"},
    {name:"C" ,age:34,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:54,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
]



let oarr =arr.filter((v,i,arr)=>v.gender=='F').map((v,i,oarr)=> v.age).reduce(function(pv,cv,ci,oarr){
    return pv+cv;
},0);
console.log(oarr);