//You are given an array of numbers. Count how many times the a number is repeated in the array.

function repeated(numbers){
    let number = [];
    for(const number of numbers){
        if(number === 5){
            number.push(numbers);
        }
    }
    return number
}

const num = repeated([5,6,11,12,98, 5]);
console.log(num);