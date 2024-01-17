let arr = [1,5,9,-3,-5,-11,0,56];
let min = arr[0];
let max = arr[0];
for (let value of arr) {
    if (value > max) {
        max = value;
    }
    if (value < min) {
        min = value;
    }
}
console.log(min);
console.log(max);