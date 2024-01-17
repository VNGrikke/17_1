let str = prompt(`nhập 1 chuỗi kí tự`);
let arr = str.split(``);
for(let i = 0; i < arr.length; i++){
    let subArr = arr[i];   
    console.log(subArr);
    for (let j = i+1; j < arr.length; j++) {
        subArr +=arr[j];
        console.log(subArr);
    }
}