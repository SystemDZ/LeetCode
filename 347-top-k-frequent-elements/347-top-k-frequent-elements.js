/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) { // Time O(2n + k) = O(n+k)
    // Hash Table to add frequent numbers
    let hash = {} // Space O(n)
    // output
    let output = []
    // fill up our hash table with numbers frequency
    for(let n of nums) hash[n] = hash[n] ? hash[n] + 1 : 1 // Time O(n)
    // Sort our Hash table based on numbers frequency big to small
    let sortedArray = Object.entries(hash).sort((a,b)=>b[1]-a[1]) // Time O(n) -  Space O(n)
    // add max values less then key
    for(let i=0; i<k; i++) output.push(sortedArray[i][0]) // Time O(k)
    return output
};


/*
111123333333444
1234

1123456789 k=8

1: 4
2: 1
3: 6
4: 3

max = Math.max(max, cur)
if(output.length <= k) output.push(max)
first loop to count numbers
second loop to find maximum of each number
then add the most frequent nums to the array
the array length is less then or equal to k
*/