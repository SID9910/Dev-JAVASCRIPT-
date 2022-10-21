//is se hum aapna map bna sakte hai

//custom map main hum aaona map banakar use kar sakte hai
//aapna map create ho chuka hai
//use karlo Mymap kaise bhi
Array.prototype.myMap =function(callback){
    let res =[];

    for(let i=0;i<this.length;i++){
      let val =this[i];
      let rv =callback(val,i,this); //ye bar bar chalega callback jaise map ke ander aalag aalg values ke leuy callback  chalta tha
                                   //and value received hogi rv main and return hoti jaegi sath sath
      res.push(rv);
    }
    return res;
}
//normal map
let arr =[2,3,5,3,2,11];
let s =arr.map(function(v,i,arr){
    return v*v;
});
console.log(s);


//my map same work karega sab main 
//my map kisi main bhi use kar sakte hai
let s2 =arr.myMap(function(v,i,arr){
    return v*v;
});
console.log(s2);
