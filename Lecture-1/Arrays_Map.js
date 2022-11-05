//map is itself a function
//map return a new array equal in length to original array
//map takes as input a callback fn
//the callback fn takes 3 parameter(v,i,arr)

//map will call the callback multiple times (once for each value)
//for each run of callback ,map will pass v and i to callback
//single value returned by each run of callback will be collected in a new array
//map returns that new array

// let arr =[2,5,9,8,15,11,6];

// let sarr =arr.map(function(v,i,arr ){

//     return v*v;
// });
// console.log(sarr);

//trick 

// let arr =[
//    "Summet Malik",
//    "Amit malik",
//    "Siddharth gupta",
//    "Pratham Gupta",
//    "Kabir Gupta"
// ]
// let res =arr.map(function(v,i,arr){
//     let namespart =v.split(" ");
//       let first =namespart[0];
//       let surname =namespart[1];
//       let ffchar =first[0];
//       let secchar =surname[0];
//       let chae =ffchar+"."+secchar+".";
//       return chae;
//     });
//     console.log(res);


//question

// let arr =[
//     {
//         gender:'M',
//         age:34

//     },
//     {
//         gender:'F',
//         age:30
//     },
//     {
//         gender:'F',
//         age:12
//     },
//     {
//         gender:'M',
//         age:31
//     },
//     {
//         gender:'F',
//         age:12
//     },
//     {
//         gender:'M',
//         age:32
//     },
//     {
//         gender:'F',
//         age:30
//     }
// ]

// let shortlist =arr.map(function(v,i,arr){
//     if(v.gender =='F'  && v.age>=20 && v.age<=30){
//         return true;
//     }else {
//         return false;
//     }
// });
// console.log(shortlist);

//map can be use like this also
// let s12 =arr.map((v,i,arr) =>v.gender =='F'  && v.age>=20 && v.age<=30 );
// console.log(s12);

// //map can also be use like this

// let s2 =arr.map((v,i,arr)=>{
//     return  v.gender =='F'  && v.age>=20 && v.age<=30;
// });
// console.log(s2);