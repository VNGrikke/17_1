let arr = [-2,-5,1,0,44,3,8,5,2,45];
let chan = new Array();
let le = new Array();
for (let i = arr.length - 1; i > -1; i-- ){
    if (arr[i]%2!==0){
        le.push(arr[i]);
    }else{
        chan.push(arr[i]);
    }
} 
console.log(`chẵn: ${chan}`);
console.log(`lẻ: ${le}`);