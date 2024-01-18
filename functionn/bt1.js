function chanLe(a){
    if(a%2===0){
        return true;
    }else{
        return false;
    }
}

let arr = [2,4,5];
for (const value of arr) {
    let result = chanLe(value);
    if (result) {
        console.log(`${value} la so chan`);
    }else{
        console.log(`${value} la so le`);
    }
}