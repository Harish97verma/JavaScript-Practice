/* Input: "hello"
Output: "olleh" */


let a = "hello";

function reverseString(str){
 return str.split('').reverse().join('');
}

console.log(reverseString(a));