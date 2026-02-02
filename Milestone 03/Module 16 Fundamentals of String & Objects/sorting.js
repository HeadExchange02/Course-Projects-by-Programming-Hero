console.log("==>");
const location = ["Dhaka", "Rajshahi", "Rongpur", "Khulna", "Barishal"];
console.log(location);

const sortedLocation = location.sort();
console.log(sortedLocation);


// ==> This sort not work properly.
console.log("==>");

console.log("==>");
const num2 = [1, 24, 3, 14, 5, 66, 37, 18, 9];
console.log(num2);

const sortedNum2 = num2.sort();
console.log(sortedNum2);


// ==> A way to solve using " , " to all elements.
console.log("==>");

const num = [12, 52, 23, 44, 15, 60, 17, 28, 19, 1,];
console.log(num);

const sortedNum = num.sort();
console.log(sortedNum);



// ==> Mainly we write this way
console.log("==>");

const num3 = [12, 52, 23, 44, 15, 60, 17, 28, 19, 1,];
console.log(num3);
const num_asc = num3.sort(function(a, b){return a - b});
const num_dsc = num3.sort(function(a, b){return b - a});

console.log(num_asc); // Ascending

console.log(num_dsc); // Descending