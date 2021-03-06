/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function(words, k) {
    // a table to store frequency
    let hash = {}
    // store words by frequency
    for (let word of words) hash[word] = hash[word] ? hash[word] + 1 : 1
    // sort based on frequency first, then equal freq, get sorted alphabetic
    let sorted = Object.entries(hash).sort((a,b)=> b[1] - a[1] || (b[0] < a[0] ? 1 : -1))
    // splice only up to k values, and map words out of the entries
    return sorted.splice(0, k).map(([word])=>word)

};
/*
bbcddeeeaaa
b2, c1, d2, e3, a3
e3, a3, b2, d2, c1
a3, e3, b2, d2, c1
*/