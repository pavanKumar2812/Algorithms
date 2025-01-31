// 29-08-2024
/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function sum2Num(nums, target){
    res = []
    for(i=0; i<nums.length; i++) {
        l = nums[i]
        r = nums[i+1]
        if (l + r == target){
           res.push(i, i+1)
        }
    }
    return res
}

console.log(sum2Num([2,7,11,15], 9))
console.log(sum2Num([3,2,4], 6))
console.log(sum2Num([3,3], 6))
console.log(sum2Num([0, 10, 11, 1, 2], 12))