let arr =[10,20,30,40,50];

//pv -previous value
//cv-current value
//ci -current index
let sum =arr.reduce(function(pv,cv,ci,oarr){
console.log(pv +" " + cv + " "+ci );
return pv+cv;
});
console.log(sum);
// output
// 10,20,1
// 30,30,2
// 60.40,3
// 100,50,4
// 150

//another if u want previous zero
// output
//0,10,0
// 10,20,1
// 30,30,2
// 60.40,3
// 100,50,4
// 150
let sum1 =arr.reduce(function(pv,cv,ci,oarr){
    console.log(pv +" " + cv + " "+ci );
    return pv+cv;
    },0); //ye value pv main
    console.log(sum1);

