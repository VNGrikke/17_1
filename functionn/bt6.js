function Capitalization(chuoi) {
    return chuoi.replace(/\b\w/g, function(word) {
        return word.toUpperCase();
    });
}
let arr = "mai nghi hoc."
console.log(`Chuỗi trước khi viết hoa: ${arr}`);
let result = Capitalization(arr);
console.log(`Chuỗi sau khi viết hoa: ${result}`);
