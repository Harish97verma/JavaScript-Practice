
let arr = [3, 5, 7, 2, 8, 1];

function findLargestNumber(arr) {
    let largest = arr[0];

    for (let i=1; i<arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargestNumber(arr)); // Output: 8