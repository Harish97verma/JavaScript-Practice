
let str = "amazone";

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    for (let i = 0; i <str.length; i++) {
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str)); // Output: 3