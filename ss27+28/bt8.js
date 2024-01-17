let arr =  [1, 2, 1, 3, 4, `f`];
let a;
let subArr = new Array();
for(let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]){
            a = i + 1;
        }
    }
}
for(i = a; i < arr.length; i++){
    subArr.push(arr[i]);
}
console.log(`mảng gồm các phần tử riêng biệt là: ${subArr}`);