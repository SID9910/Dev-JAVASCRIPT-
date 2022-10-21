//humme females ki ages nikalni hai bss     
let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:24,gender:"F"},
    {name:"C" ,age:34,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:54,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
]
//one way alag aalag karke karo

// let oarr =arr.filter(function(v,i,arr){
//        if(v.gender=='F'){
//         return true;
//        }else{
//         return false;
//        }
// });
// console.log(oarr);
// let sarr =oarr.map(function(v,i,oarr){
//     return v.age;
// });
// console.log(sarr);


//another way
//do no aaar ke sath use karna ho a
// let oarr =arr.filter(function(v,i,arr){
//     if(v.gender=='F'){
//      return true;
//     }else{
//      return false;
//     }
// }).map(function(v,i,oarr){
//  return v.age;
// });
// console.log(oarr);

//another way using arrow function

let oarr =arr.filter((v,i,arr)=>v.gender=='F').map((v,i,oarr)=> v.age);
console.log(oarr);