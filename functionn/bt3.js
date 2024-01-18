function demSoKyTu(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            count++;
        }
    }
    return count;
}
let arr = "mai nghỉ học.";
console.log("Chuỗi đã khai báo:", arr);
let ketQua = demSoKyTu(arr);
console.log("Số ký tự trong chuỗi là:", ketQua);
