/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const list={}
    for(let i=0; i<nums.length; i++){
        list[target-nums[i]] = i
        if(nums[i+1] in list) return [list[nums[i+1]], i+1]
    }
};


/*
       0 1
input: 2,7,11,15 - 9
output: [0, 1]

list = {
    '7': 0,
}

return [list[nums[i]],i]

1. Analyze the problem
2. Restate the problem
3. Write out examples of input and output
4. Break the problem into its component parts
5. Outline a solution in psuedo-code
6. Step through your example data with your psuedo-code
7. Execute
8. use brute force if needed
9. then optimize
10. Code it up
11. Test your solution against your examples
12. Refactor
13. Time & Space Complexity

*/