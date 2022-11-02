//filter basically taab use karenge jaab humme aalag aalga chize karni ho
//and ye true and false main kaam karta hai
//jaise he true milli v then vo bss add kar dega new array main true ki value jo aai thi
//only true vali dega
//its all also a callback like map

//same parameter like map 
//its work as callback
let arr =[2,5,34,3,3,5,6,3,56,2];
let orr=arr.filter(function(v,i,arr){
    if(v%2==1){
        return true;
    }else {
        return false;
    }
});
//bss true vale honge isme 
console.log(orr);