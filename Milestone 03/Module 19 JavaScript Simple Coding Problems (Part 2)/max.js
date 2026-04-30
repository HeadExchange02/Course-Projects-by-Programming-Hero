const azmir = 80;
const antor = 75;

if(azmir > antor){
    console.log("azmir pass");
}
else {
    console.log("antor pass");
}

//inside function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(55, 99);
const max2 = getMax(33, 9);
const max3 = getMax(-55, -99);
console.log(max);
console.log(max2);
console.log(max3);