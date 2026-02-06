let a = 5;
let b = 7;
console.log(a, b);


// a = b;
// b = a;
// console.log(a, b);


const temp = a;
a = b;
b = temp;
console.log(a, b);


let x = 11;
let y = 22;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);