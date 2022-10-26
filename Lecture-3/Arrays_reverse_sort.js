let sarr =["heloo" ,"bello","bye","there" ,"pep","nados"];
let narr =[21,54,23,13,34,98,45,,3,55,22];

//sort and reverse
sarr.sort();
console.log(sarr);
sarr.reverse();
console.log(sarr);

//dont work in narr
// narr.sort();

narr.sort((a,b) =>a-b);//numerical sort
console.log(narr);
narr.reverse();
console.log(narr);
