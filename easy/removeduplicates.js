
let arr=[1, 2, 3, 4, 5, 2, 3, 1];

function removeDuplicates(arr) {
    let uniqueArr=[];
    for(let i=0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

function removeDuplicatesTwo(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicatesTwo(arr)); // Output: [1, 2, 3, 4, 5]