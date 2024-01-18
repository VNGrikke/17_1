function findSum(arr, x) {
    let numberPair = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                numberPair.push([arr[i], arr[j]]);
                return numberPair;
            }
        }
    }
    return numberPair
}
let arr = [1, 2, 4, 5, 6, 8, 10, -1, 12];
let x = parseInt(prompt("Nhập vào một số nguyên:"));
let result = findSum(arr, x);
if (result.length > 0) {
    console.log(`Cặp số có tổng bằng ${x}: [${result[0]}]`);
} else {
    console.log("Không tìm thấy cặp số có tổng bằng số nhập vào.");
}
