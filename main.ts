/**
 * Some Edabit challenge
 * 
 * 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
 * example, if the input is 4 then your function should return 10 because 
 */

function addUp(num: Number) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(4));

/**
 * Create a function that takes a string and returns a string in which each character is repeated once.
 */

function doubleChar(str: String) {
    let arr = str.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i], arr[i])
    }
    return result.join('')
}

console.log(doubleChar('well it worked'));
 