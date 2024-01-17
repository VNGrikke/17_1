let a = +prompt("nhập a");
let b = +prompt("nhập b");
if(a>b){
    for (let i = b; i <= a; i++) {
        console.log(i);
    }
}else{
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}