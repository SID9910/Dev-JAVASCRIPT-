let str ="my name is siddharth .i am a student .i believe everything we can achieve .i need courage and patience ";
//input

//output we want
"siddharth is name my .student a am i .achieve can we everything believe i.patience and courage need i";
//without using for loop

//tood do pehle
let res =str.split(".");
console.log(res);
 //aab ''htane ke ley filter kar do
 let res1 =res.filter(s =>s.length>0);
console.log(res1);

//space hatane ke ley trim kardo
let res2 =res1.map(s =>s.trim());
console.log(res2);

//aab pehle saare words ko aalag karlo
//basically 2d array banao
let res3=res2.map(s =>s.split(" "));
console.log(res3);


//aab reverse kardo sabko
res3.forEach(function(a){
    a.reverse();

})
console.log(res3);

//aab join karo
let res4 =res3.map(s =>s.join(" "));
console.log(res4);

//aab . daal do
let res5 =res4.map(s => s+ " .");
console.log(res5);

//apas main sabko jodo
let res6 = res5.reduce(function(pv,cv){
    return pv + " " +cv;
});
console.log(res6);