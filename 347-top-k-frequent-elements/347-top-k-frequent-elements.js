/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    let output = []
    for(let n of nums){
        hash[n] = hash[n] ? hash[n] + 1 : 1
    }

    let sortedArray = Object.entries(hash).sort((a,b)=>b[1]-a[1])
    console.log(sortedArray)
    for (let i=0; i<k; i++) {
        output.push(sortedArray[i][0])
    }
    return output    
};


/*

111123333333444
1234

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