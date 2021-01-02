function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) {
            partialSum = 0;
        }
    }
    return maxSum;
}

let one = [1, -5, 0, -1, 13, 2, 4, 0, -2];

console.log(getMaxSubSum(one));
