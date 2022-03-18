/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // brute 
    for (let i=0; i<nums.length; i++) 
        if (nums[i] === target) return i
    return -1
};


/*
t=0
l=0, r=0

4567012
l  m  r

while
    if m > l
        if t<l
            search right
        else
            search left
    else
        search right

return -1
    
    
*/