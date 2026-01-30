// Even numbers

// for (i = 0; i < 20; i++){
//     if(i %2 === 0){
//         console.log("Even numbers: ", i);
//     }
// }
for (i = 0; i < 20; i++){
    if(i %2 !== 1){ // " !== 1" means not 1
        console.log("Even numbers: ", i);
    }
}
// Odd numbers

for (i = 0; i < 20; i++){
    if(i %2 === 1){
        console.log("Odd numbers: ", i);
    }
}


// Give me the list of number between 1 to 30 divisible by 5 or 3 and 10.
console.log("the list of number between 1 to 30 divisible by 5 or 3:");
let sum = 0;
for (let i = 1; i <= 30; i++){
    if(i % 5 === 0 || i % 3 === 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log("Sum of numbers: ", sum)

console.log("the list of number between 1 to 30 divisible by 5 and 10:");
let total = 0;

for (let i = 1; i <= 30; i++){
    if(i % 5 === 0 && i % 10 === 0 ){
        console.log(i);
        total = total + i;
    }
}
console.log("Total number: ", total)