// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function stringRevers(str){
    let reversStr  = '';
    for(let i = str.length-1; i>=0; i--){
        const reversCount = str[i];
        reversStr += reversCount;
    }
    return reversStr;
}
const result = stringRevers('roushan')
console.log(result)
//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 