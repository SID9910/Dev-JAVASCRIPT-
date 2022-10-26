//find ,findindex
//filter

let arr =[10,20,30,40,50,60,60,50,40,30,20,10];

let iores =arr.indexOf(30);//firstindex or-1
let lios =arr.lastIndexOf(30); //last index or -1
let iros =arr.includes(30); //true or false

let fres =arr.find(function(v,i,oarr){
    return v == 30;
});


let fires =arr.findIndex(function(v,i,oarr){
    return v == 30;
});

let fitres =arr.filter(function(v,i,oarr){
    return v == 30;
});

console.log(iores);
console.log(lios);
console.log(iros);
console.log(fres);
console.log(fires);
console.log(fitres);