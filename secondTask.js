// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function stringRevers(str){
    let reversStr  = '';
    for(let i = str.length-1; i>=0; i--){
        const reversCount = str[i];
        reversStr += reversCount;
    }
    return reversStr;
}
const result = stringRevers('hello world');
console.log(result);
//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function calculatePositiveNumber(arr){
    const positiveNumber = arr.filter(item=>item>0);
    const numberSum = positiveNumber.reduce((previousValue,currentValue)=>previousValue+currentValue,0);
    return numberSum;
}

const numberArray = [2, -5, 10, -3, 7];
const positiveNumberSumResult =  calculatePositiveNumber(numberArray);
console.log(positiveNumberSumResult);