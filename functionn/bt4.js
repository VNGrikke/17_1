function theNumberOfOccurrences(arr,x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    return count;
}
let arr = prompt("Nhập vào một chuỗi:");
let x = prompt("Nhập vào một ký tự:");
let result = theNumberOfOccurrences(arr, x);
console.log(`Số lần xuất hiện của ký tự "${x}" trong chuỗi là: ${result}`);
