// let a1 =[10,20,30,40,50];
// let a2 =[10,30,50];

// // //intersection
// // // 10,30,50
// console.log(a2.includes(80));//false
// console.log(a2.includes(10));//true

// // //intersection
// let intern =a1.filter(v =>a2.includes(v));
// console.log(intern);

//ques-2 common nikalna hai
let arr2 =[
[10,50,70,90,80,100,30,60],
[11,50,75,90,85,100,30,60],//50,90,100,30,60
[10,51,70,90,100,50,30,60],//90,100,30,60
[11,50,75,85,92,100,34,60],//100,60
[10,50,70,80,90,100,30,60],//100,60
]
let intern2 =arr2.reduce(function(pv,cv,ci,oarr){
    console.log(pv +"####"+cv);  //isme dikhega kaise hua
    let intern =pv.filter(v =>cv.includes(v));
    return  intern;
});
console.log(intern2);
