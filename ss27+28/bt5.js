let arr = [1,23,4,5,4,2,2,1,1,1];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count===0){
        console.log(arr[i]);
        break;
    }
}