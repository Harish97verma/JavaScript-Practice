
let arr = [3, 5, 7, 2, 8, 1];

function countValues(arr) {
    let count = 0;
  for (let i = 0; i < arr.length; i++) {
      count = count + arr[i];
      
    }
  return count;
}

console.log(countValues(arr)); // Output: 26