let arr =  [1,2,1,3,4,5,2,6,8,9];
let str = new Array();
for(let i = 0; i < arr.length; i++){
    let subArr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            break;
        }
        subArr.push(arr[j]);
    }
    if(subArr.length > str.length){
        str = [...subArr];
    }
}

console.log(`mảng gồm các phần tử riêng biệt có độ dài lớn nhất là: ${str}`);
