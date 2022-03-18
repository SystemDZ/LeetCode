/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points.sort((a,b) => len(a) - len(b)).slice(0, k)
};

function len([a,b]){
    return a*a + b*b
}
