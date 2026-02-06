const heights = [65, 66, 67, 68, 69, 60, 65, 66];

function getMax(numbers){
    // console.log(numbers);

    let max = numbers[0];
    for(const num of numbers){
        // console.log(num);

        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log(max);