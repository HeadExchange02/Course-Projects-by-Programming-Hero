function doubleIt(number){

    const double = number * 2;

    console.log(number, double);
}

console.log("I'm calling the function");

doubleIt(55);

console.log("_______________");
doubleIt(555);

console.log("_______________");
doubleIt(5555);


console.log("_______________");
console.log("_______________");


function difference (num1, num2){
    const diff = num1 - num2;

    console.log(num1, num2, "difference is", diff);
}

const fatherAge = 45;
const myAge = 25;

difference(fatherAge, myAge);