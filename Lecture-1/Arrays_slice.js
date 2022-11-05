  //slice humme array ko jha se jha taak chaheye hota hai uske ley use hota hai 
  //basically shallow copy banata hai slice
// let arr =[20,30,40,50];
// function display(arr){
//     console.log(arr);
// }
// display(arr);
// let n1 =arr.slice(1,4);
// display(n1);
// let n2 =arr.slice(1);
// display(n2);
// let n3 =arr.slice(1,5);
// display(n3);
// let n4 =arr.slice();
// display(n4);
// let n5 =arr.slice(-3,-1); //from last 
// display(n5);
// let n6 =arr.slice(1,-2); //ye bhi work karega
// display(n6);

//trick
//dekhna dono main changes honge
let arr1 =[20,30,40,50];
//aaase excess karenge
function display1(arr1){
    let str="";
    for(let i=0;i<arr1.length;i++){
        str+=arr1[i].age+ ",";
    }
    console.log(str+".");
}

// //using objects
let o1={
    age:100
};
let o2={
    age:200
};
let o3={
    age:300
};
// //original array main object use kar rahe hai
let origarr =[o1,o2,o3];
display1(origarr);

let shallowarr =origarr.slice();
display1(shallowarr);

//ye karne ke baad dono main same changes honge 
//shallow and orignal same main point karega object eek dusre ko 
shallowarr[0].age =110;
display1(shallowarr);
display1(origarr);
