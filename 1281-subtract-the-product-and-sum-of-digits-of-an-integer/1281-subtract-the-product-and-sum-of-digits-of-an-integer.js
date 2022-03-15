/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return String(n).split('').map(n=>Number(n)).reduce((a,b)=>a*b, 1) - String(n).split('').map(n=>Number(n)).reduce((a,b)=>a+b, 0)
};