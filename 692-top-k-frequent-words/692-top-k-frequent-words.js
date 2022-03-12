/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function(words, k) {
    let hash = {}
    let output = []
    for (let word of words) hash[word] = hash[word] ? hash[word] + 1 : 1
    console.log(hash)
    let sortedWords = Object.entries(hash).sort((a,b)=>b[1] - a[1] || (b[0] < a[0] ? 1 : -1))
    return sortedWords.slice(0, k).map(([word]) => word)
};
/*
bbcddeeeaaa
b2, c1, d2, e3, a3
e3, a3, b2, d2, c1
a3, e3, b2, d2, c1
*/