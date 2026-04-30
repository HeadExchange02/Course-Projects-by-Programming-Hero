const prices = [375237, 47925, 894207, 76592, 14949, 29440, 94147, 234764, 71941, 794174, 9857925, 794911, 985837, 582052, 97204];

function getMin(numbers){
    // console.log(numbers);

    let min = numbers[0];
    for (const num of numbers){
        // console.log(num);

        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(prices);
console.log("cheapest one is:", min);