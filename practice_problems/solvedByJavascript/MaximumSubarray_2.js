/*
Maximum Subarray
Problem: Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
(Subarray: [4,-1,2,1])

*/


function maxSubArray(nums) {
    var maxSum = nums[0];
    var currentSum = nums[0];
    var arra= [];
    for (let i=1;i<nums.length;i++) {
        currentSum = Math.max(nums[i], (currentSum+nums[i]));
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));