// Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)
 const vowels = 'aeiouAEIOU';
 let vowelCount = 0;
 let consonantCount = 0;
const str = 'roushan';


for (let i = 0; i < str.length; i++) {
 const char = str[i];
if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantCount++;
    }
   }

 console.log("Number of vowels:", vowelCount);
 console.log("Number of consonants:", consonantCount);

// Write a code to calculate if the string is palindrome ? (Use javascript only)
const word = 'dad';
let massage = 'it is a palindrome word'
 for(let i = 0; i < massage.length/2; i++){
if(word[i] != word[word.length - 1 - i]){
     massage='it not a palindrome'
  }
}
 console.log(massage)

//  Explain what a callback function is and provide a simple example? 

 function calculate(a,b,cb){
   const c = a+b;
   const d = a-b;
   const result = cb(c,d);
   return result;
 }

 function sum(a,b){
   return a + b;
 }
 const res = calculate(5,6,sum);
 console.log(res);