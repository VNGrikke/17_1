function locPhanTuTheoChuoi(arr, subArr) {
    let result = arr.filter(function(element) {
        return element.includes(subArr);
    });
    return result;
}
let arr = ["apple", "banana", "orange", "grape", "kiwi", "watermelon"];
let subArr = prompt("Nhập vào một chuỗi:");
let result = locPhanTuTheoChuoi(arr, subArr);
console.log(`Các phần tử trong mảng chứa chuỗi "${subArr}":`, result);
