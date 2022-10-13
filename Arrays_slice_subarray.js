let arr =[20,100,20,30,40];
function display(arr){
    console.log(arr);
}

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        let sa =arr.slice(i,j);
        display(sa);
    }
}