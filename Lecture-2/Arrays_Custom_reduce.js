Array.prototype.myreduce =function(cb ,iv){  //iv -initial value aagr di hui previous ko set ke ley 
                                             //aagr nhi di hui to ye undefined hogi
    let oarr =this;
    let pv ;
    if(iv ==undefined){
        pv =oarr[0];
        for(let i=1;i<oarr.length;i++){
            let cv =oarr[i];
            pv =cb(pv ,cv,i,oarr);
        }
    }else{
        //this case is for set prevoius as 0 u can see the reduce sum1
        pv =iv;
        for(let i=0;i<oarr.length;i++){
            let cv =oarr[i];
            pv =cb(pv,cv,i,oarr);
        }
    }
    return pv;
}

let arr =[10,20,30,40,50];

let sum =arr.myreduce(function(pv,cv,ci,oarr){
console.log(pv +" " + cv + " "+ci );
return pv+cv;
});
console.log(sum);