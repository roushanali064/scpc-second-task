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
//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function mostFrequentNumber(arr) {
    const mostNumberMap = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (mostNumberMap[item]) {
            mostNumberMap[item]++;
        } else {
            mostNumberMap[item] = 1;
        }
    }
    let mostFrequentElementNumber;
    let maxFrequencyNumber = 0;
    for (const key in mostNumberMap) {
        if (mostNumberMap[key] > maxFrequencyNumber) {
            mostFrequentElementNumber = key;
            maxFrequencyNumber = mostNumberMap[key];
        }
    }

    return mostFrequentElementNumber;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = mostFrequentNumber(inputArray);
console.log(mostFrequent);

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function TwoNumbersWithTargetSum(arr, target) {
    let firstSide = 0;
    let secondSide = arr.length - 1;
  
    while (firstSide < secondSide) {
      const currentSum = arr[firstSide] + arr[secondSide];
  
      if (currentSum === target) {
        return [firstSide, secondSide];
      } else if (currentSum < target) {
        firstSide++;
      } else {
        secondSide--;
      }
    }
  
    return null;
  }
  const arr = [1, 3, 6, 8, 11, 15];
  const target = 9;
  const targetSumResult = TwoNumbersWithTargetSum(arr, target);
  console.log(targetSumResult);
  //Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
  function calculator(num1,num2,operator){
    const calculate = operator === '+' ? num1+num2:
    operator === '-' ? num1-num2:
    operator === '*' ? num1*num2:
    operator === '/' ? num2 === 0 ? '0 not divided':  num1/num2:
    'please provide this operator(+,-,*,/)';
    return calculate
  }
  const calculateResult  = calculator(5,4,'+');
  console.log(calculateResult);
//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generatePassword(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 8;
    let password = '';
    for(let i = 0; i <=passwordLength; i++){
        const randomNumber = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNumber, randomNumber +1);
    }
    console.log(password)
}
generatePassword()
