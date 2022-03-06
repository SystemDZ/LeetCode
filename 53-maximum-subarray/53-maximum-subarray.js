/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  for (let i=1; i<nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    // 0  1 2 3
    // 4,-1,2,1
    // 4, 3,2,3
  }
  return Math.max(...nums)
};



/*

[4,-1,2,1]


nums[i] = Math.max(nums[i],nums[i]+nums[i-1]) // i=1
nums[i] = Math.max(-1,3) // i=1
[3,-1,2,1]


nums[i] = Math.max(2,1) // i=2
[3,2,2,1]

Math.max(...nums)


*/