//apna filter true ke basis per add karega

Array.prototype.myfilter =function(callback){
    let res =[];

    for(let i=0;i<this.length;i++){
      let val =this[i];
      let rv =callback(val,i,this); //ye bar bar chalega callback jaise map ke ander aalag aalg values ke leuy callback  chalta tha
       
      //and value received hogi rv main and return hoti jaegi sath sath
      if(rv ==true){
        res.push(val);
      }
      
    }
    return res;
}

let arr =[2,5,34,3,3,5,6,3,56,2];
let orr=arr.myfilter(function(v,i,arr){
    if(v%2==1){
        return true;
    }else {
        return false;
    }
});
//bss true vale honge isme 
console.log(orr);