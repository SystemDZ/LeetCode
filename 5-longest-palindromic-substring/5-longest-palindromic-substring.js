/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '', longRes = 0
    for(let i=0; i<s.length; i++){
        let r=i, l=i
        while(l>=0 && r<s.length && s[l] === s[r]){
            if(r-l+1 > longRes){
                res = s.substring(l, r+1)
                longRes = r-l+1
            }
            l--
            r++
        }
        
        r=i, l=i+1
        while(l>=0 && r<s.length && s[l] === s[r]){
            if(r-l+1 > longRes){
               longRes = r-l+1
                res = s.substring(l, r+1)
            }
            l--
            r++
        }
    }
    return res
};
