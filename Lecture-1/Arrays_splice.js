 //splice insert and remove dono ke ley use kar sakte hai
let arr =[10,20,30,40,50];
function display(arr){
    console.log(arr);
}
// display(arr);
// //insert ke ley
// let na =arr.splice(2,2,300,400); //splice humee 2 index se aage ke do remove karke 300 and 400 daal dega
// display(arr);//isme insert honge
// display(na); //ye remove hai

// //removal and inset both can work
//  let na1 =arr.splice(1,1,400,2);//aab uper arr=[10,20,300,400,50] ho gya hai
//  display(na1);
//  display(arr);//isert honge isme


 //remove
 let n11=arr.splice(1,1); //ye 1 index se eek remove kar dega
 display(n11);
 display(arr); //isme nhi hoga vo aab remove
 
 //remove
 let n12=arr.splice(1,2); //ye 1 index se do remove kar dega
 display(n12);
 display(arr); //two remove honge isme

