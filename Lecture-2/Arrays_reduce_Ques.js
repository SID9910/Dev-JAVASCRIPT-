//ques1
//count all prime using reduce 

// let arr =[51,23,37,44,73,82,97,45];

// let cp =arr.reduce(function(pv ,cv,ci,oarr){
//     let flag =true;
//      console.log(pv+ "-" +cv);
//      for(let div =2;div*div<=cv;div++){
//         if(cv%div ==0){
//             flag =false;
//             break;
//         }
//      }
//      if(flag ==true){
//         return pv+1;
//      }else{
//         return pv;
//      }
// },0);
// console.log(cp);
//output
// 0-51
// 0-23
// 1-37
// 2-44
// 2-73
// 3-82
// 3-97
// 4-45
// 4

//ques-2
//concate  the  2-d array into 1-d array
// let arr =[[2,8,10] ,[34],[45,31,25,64,72,88] ,[],[25,73]];

// let arr1 =arr.reduce(function(pv,cv,ci,oarr){
//     let narr =pv.concat(cv);
//     return narr;
// },[]);
// console.log(arr1);

//[],[2,8,10]
// [2,8,10] ,[34]
// [2,8,10,34],[45,31,25,64,72,88]
// [2,8,10,34,45,31,25,64,72,88] ,[]
// [2,8,10,34,45,31,25,64,72,88] ,[25,73]
//[2,8,10,34,45,31,25,64,72,88,25,73]
//flattern the 2d array


//ques-3
function f(x){
return x*x;
}
function g(x){
    return x+10;

}
function h(x){
    return 2*x;
}
let farr =[f,g,h];
let x =10;
//f(g(h(x))) =f(g(2x)) =f(2x+10) =4*x^2 +100+40x =900
let cv =farr.reverse().reduce(function(pv ,cv){
      return cv(pv);
},x);
console.log(cv);

//10,f
//f(10),g
//g(f(19=0)),h
//h(g(f(10)))

//reverse se dekho answer milega
//10,h
//h(10),g
//g(h(10)),f
//f(g(h(10)))
