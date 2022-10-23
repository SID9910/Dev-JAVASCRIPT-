Array.prototype.mysome =function(callback){
    

    for(let i=0;i<this.length;i++){
      let val =this[i];
      let rv =callback(val,i,this); //ye bar bar chalega callback jaise map ke ander aalag aalg values ke leuy callback  chalta tha
       
      //and value received hogi rv main and return hoti jaegi sath sath
      if(rv ==true){
        return true;
    }
      }
      return false;
    }

    
    
    //mysome custom  works same as some 
    let arr=[
        {name:"A" ,age:14,gender:"M"},
        {name:"B" ,age:44,gender:"F"},
        {name:"C" ,age:44,gender:"F"},
        {name:"D" ,age:14,gender:"M"},
        {name:"E" ,age:54,gender:"F"},
        {name:"F" ,age:64,gender:"M"}
    ]
    let isthereAnyvalidcandidate =arr.mysome(function(v,i,ar){
        if(v.gender =='F' && v.age>=20 && v.age<=30){
            return true;
        }else{
             return false;
        }
    });
    console.log(isthereAnyvalidcandidate);
