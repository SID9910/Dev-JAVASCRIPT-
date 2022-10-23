//1.function call and push appends 1 or more values at the end of the array
//isme out of bond acception nhi aati'
//array object hai javascriot main 

// let arr =[20,30,40,50];
// function display(arr){
//     console.log(arr+ " = " +arr.length);
//     }

// console.log(Object.keys(arr));
//  display(arr);
//  arr.push(1000);
//  display(arr);
//  arr.push(1000,2000,3000);
//  display(arr);

// 2.pop operation in array
// let arr1 =[10,30,20,40];
// function display1(arr1){
//     console.log(arr1+ " = " +arr1.length);
//     }
// display1(arr1);
// arr1.pop();
// display(arr1);

//3.push main dekhna arr[10] exist nhi karta so out 0f bound acception nhi aaegi
//dekhna

//     let arr2 =[10,30,20,40];
//     function display3(arr2){
//         console.log(arr2+ " = " +arr2.length);
//         }
//         arr2[10]=500;
//         display3(arr2); //append ho jaega bich main ,,,ajaenge
//   arr2["kuchbhi"]=1000;
//   console.log(arr2["kuchbhi"]);//1000 print ho jaega


//4.arrays main start main add ke ley unshift use hota hai
// let arr3 =[20,140,23,90];
// function display4(arr3){
//     console.log(arr3+ " ="+arr3.length );

// }
// display4(arr3);
// arr3.unshift(1000);
// display4(arr3);
// arr3.unshift(1000,2000,3000);
// display4(arr3);

//5.array main start se aaagr pop karna ho then shift use karte hai
// let arr4 =[20,140,23,90];
// function display5(arr4){
//     console.log(arr4+ " ="+arr4.length );

// }
// display5(arr4);
// arr4.shift();
// display5(arr4);
// arr4.shift();

// display5(arr4);

//rerrange arrays even at front and odd at the end
let arr5 =[1,2,3,4,5,6,7,8];
function display12(arr5){
    console.log(arr5 + "=" +arr5.length);

}
let odd =[];
let even =[];
display12(arr5);
while(arr5.length>0){
    let val =arr5.shift();
    if(val%2==0){
        
        even.push(val);
    }else{
        odd.push(val);
    }
}
arr5 =even.concat(odd); //pehle odd then even
display12(arr5);
display12(odd);
display12(even);