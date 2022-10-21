let arr =[11,16,15,17,23,42,11,37];

let mres =arr.map(v => v%2==1);
let fres =arr.filter(v =>v%2==1);

console.log(mres);//jo ho janege %2 bss vo true baki false
console.log(fres);//bss jo %2 honge vo milenge