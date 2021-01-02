function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let subSum = 0;
        for (let j = i; i < arr.length; i++) {
            subSum += arr[j];
            maxSum = Math.max(maxSum, subSum);
        }
    }
    return maxSum;
}

console.log(getMaxSubSum());