//Task-1:
//Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsious){
return (celsious * 9/5) + 32;
}

const temperature = celsiusToFahrenheit(25);
console.log(temperature, "Fahrenheit.");