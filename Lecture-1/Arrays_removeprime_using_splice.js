 //splice inset and remove dono ke ley use kar sakte hai
let arr =[10,47,15,17,92,97,93,31,46,54];

function display(arr){
    console.log(arr);
}
function  prime(val){

for(let div=2;div*div<=val;div++){

if(val%div==0){
return false;

}
}
return true;

}
//loop ulta chalega  taabhi work karega
//splice
for(let i=arr.length-1;i>=0;i--){
    let val =arr[i];
   let isprime =prime(val);
    if(isprime==true){
        arr.splice(i,1); //bsss usko hta do

    }
}
display(arr);