function oddAverage(numbers){
    const odds = [];

    for(const number of numbers){
        if (number % 2 === 1) {
        odds.push(number);
        }
    }
    // console.log(odds);

    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }

    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;

    return avg;
}

const numbers = [42, 13, 58, 64, 81, 96, 7, 99];
const avg = oddAverage(numbers);
console.log("avarage of the odd numbers is:", avg);