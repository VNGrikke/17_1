let arr = [-2,-5,1,0,44,3,8,5,2,45];
for (let i = arr.length - 1; i > -1; i-- ){
    if (arr[i]%2!==0){
        arr.splice(i,1);
    }
} 
console.log(arr);