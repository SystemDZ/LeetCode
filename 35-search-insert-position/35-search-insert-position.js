/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    /*
    let i=0;
    while (i < nums.length) {
        if(target <= nums[i]) return i
        else if(target > nums[i]) i++
    }
    return i
    */

    let i=0
    while(i < nums.length)
        if(target <= nums[i]) return i
        else i++
    return i
};
