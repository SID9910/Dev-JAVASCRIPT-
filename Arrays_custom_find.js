
Array.prototype.myfind =function(callback){
    

    for(let i=0;i<this.length;i++){
      let val =this[i];
      let rv =callback(val,i,this); //ye bar bar chalega callback jaise map ke ander aalag aalg values ke leuy callback  chalta tha
       
      //and value received hogi rv main and return hoti jaegi sath sath
      if(rv ==false){
        return val;
    }
      }
      return undefined;
    }
 let arr=[
    {name:"A" ,age:14,gender:"M"},
    {name:"B" ,age:24,gender:"F"},
    {name:"C" ,age:44,gender:"F"},
    {name:"D" ,age:14,gender:"M"},
    {name:"E" ,age:54,gender:"F"},
    {name:"F" ,age:64,gender:"M"}
]


// are all female candidates valid 
let isAnyvalidcandidate =arr.myfind(function(v,i,ar){
    if(v.gender =='F' && v.age>=20 && v.age<=30){
        return true;
    }else{
         return false;
    }
});
if(isAnyvalidcandidate!=-1){
console.log(isAnyvalidcandidate.name+"@ "+isAnyvalidcandidate.age +"#"+isAnyvalidcandidate.gender);
console.log(isAnyvalidcandidate);//index return 
}else{
    console.log("not found");
}