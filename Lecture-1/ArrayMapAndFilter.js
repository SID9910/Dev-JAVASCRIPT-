let product =[
    {name:"T-Shirt" ,price:25},
    {name:"Headphones" ,price:125},
    {name:"keyboard" ,price:75},
    {name:"Monitor" ,price:200}
];


//kya karna hai bss 100 se barabar or jada valo name ko uppercase main karke print karna hai
//using arrow
// let fres =product.filter(p => p.price >=100).map(p=> p.name.toUpperCase());
// console.log(fres);


// let fres2=product.filter(function(v,i,orr){
//     if(v.price>=100){
//         return true;
//     }else{
//         return false;
//     }
// }).map(function(v,i,oarr){
//     return v.name.toUpperCase();
// });
// console.log(fres2);



//next all>=100 in uppercase and <100 lowercase

// let res =product.map(function(v,i,arr){
//     if(v.price>=100){
//       return v.name.toUpperCase();
//     }else{
 
//         return v.name.toLowerCase();
//     }
// });
// console.log(res);

//using arrow
// let res1 =product.map(v=>v.price>=100?v.name.toUpperCase():v.name.toLowerCase());
// console.log(res1);




//return cubes of values whose square <=100
// let arr=[5,83,24,67,71,12,24,7];
// let res1=arr.filter(p =>p*p>=1000).map(p =>p*p*p);
// console.log(res1);

//give me cubes of numbers whose cubes are less then 10000
// let arr1=[5,83,24,67,71,12,24,7,49];

// let fed =arr1.map(v =>v*v*v).filter(p => p<=10000);
// console.log(fed); 

//what is returning
// let ans2 =arr1.map(v =>v*v).filter(v2 => v2<=1000).map(v=>v*v*v);
// console.log(ans2);