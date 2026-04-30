function evenSizedString(str){
    const size = str.length;

    console.log(str, size);

    if(size % 2 === 0){
        console.log("even size");
    }
    else{
        console.log("odd size");
    }

    
}

evenSizedString("Azmir Antor");
evenSizedString("AzmirAntor");




function doubleOrTriple(number, doDoble){
    if(doDoble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));




function numbersOffElements(numbers){
    const len = numbers.length;
    return len;
}

numbersOffElements([11, 22, 33, 44, 55, 99]);



function getAge(person){
    const age = person.age;
    return age
}