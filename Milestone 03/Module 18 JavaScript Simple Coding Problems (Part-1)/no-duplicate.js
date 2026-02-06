const khor = ['antor', 'azmir', 'nur', 'nur', 'kalam', 'muk', 'mak', 'mak'];
const numbers = [1, 3, 6, 4, 22, 6, 33, 33];

function noDuplicate(array){
    // console.log(khor);
    unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

// const uniqueArray = noDuplicate(khor);
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);