function Max(arr) {
    let maxLength = 0;
    let maxElement = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        const length = element.length;
        if (length > maxLength) {
            maxLength = length;
            maxElement = element;
        }
    }

    return maxElement;
}
function createArr() {
    const mang = [];
    const kyTu = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 10; i++) {
        const doDai = Math.floor(Math.random() * 10) + 1;
        let element = "";

        for (let j = 0; j < doDai; j++) {
            element += kyTu.charAt(Math.floor(Math.random() * kyTu.length));
        }

        mang.push(element);
    }
    return mang;
}
let arr = createArr();
console.log(`mảng đã khai báo: ${arr}`);
let result = Max(arr);
console.log(`phần tử dài nhất: ${result}`);


