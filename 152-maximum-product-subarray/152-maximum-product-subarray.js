/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let out=1, max=Number.MIN_VALUE
    for(let i=0; i<nums.length;i++){
        out *= nums[i]
        max = Math.max(max, out)
        if(out === 0) out = 1
    }
    out = 1
    for(let i=nums.length-1; i>=0; i--){
        out *= nums[i]
        max = Math.max(max, out)
        if(out === 0) out = 1
    }
    if(nums[0]<0 && nums.length === 1) return nums[0]
    return max
};


/*
[3,-1,4,-5]
   i  
 output = 3
 max = 3
 

[2,3,4] sub sequence
[2,3] sub array
max 
8,9,10,-3,-4,11,12


output = 1
max = 0
1,2,3,-3,4,5
       i

if(nums[i] < nums[i+1])
    output *= nums[i]  // 6
else
    max = Math.max(max, output)
    output = 1
    



*/