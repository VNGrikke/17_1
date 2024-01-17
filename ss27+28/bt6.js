let arr = [3,8,2,5,9,7,4,1];
let arr2 = new Array();
console.log(`trước khi sắp xếp ${arr}`);
while(arr.length>0){
    let i = (Math.floor(Math.random() * (arr.length)))
    arr2.push(arr[i]);
    arr.splice(i,1);
}
console.log(`sau khi sắp xếp ${arr2}`);