//union of two arrays
// let arr1 =[10,50,70,80,90,100,30,60];
// let arr2 =[11,50,75,85,90,100,34,60];

// let arm2 =arr2.filter(v=> !arr1.includes(v)); 
// console.log(arm2); //isme vo honge jo common nhi honge arr2 ke arr1 se

// let union =arr1.concat(arm2);//isme union hoga pura 
// console.log(union);



let arr2 =[
    [10,50,70,90,80,100,30,60],
    [11,50,75,90,85,100,30,60],
    [10,51,70,90,100,50,30,60],
    [11,50,75,85,92,100,34,60],
    [10,50,70,80,90,100,30,60],
    ]
    
    // we have to take union of that array
    let intern2 =arr2.reduce(function(pv,cv,ci,oarr){
        let cmpv =cv.filter(v => !pv.includes(v));
        let union =pv.concat(cmpv);
        return  union;
    });
    console.log(intern2);