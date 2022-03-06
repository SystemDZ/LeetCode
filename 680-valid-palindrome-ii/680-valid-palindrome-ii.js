/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l=0, r=s.length-1
    while(l<r){
        if(s[l] !== s[r]) return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1)
        l++, r--
    }
    return true
}

function isPalindrome(s, l, r){
    while(l<r){
        if(s[l] !== s[r]) return false
        l++, r--
    }
    return true
}
    /*
    let l = 0;
    let r = s.length-1;
    let count = 0;
    
    while (r > l){
        if(s[l] === s[r]){
            l++;
            r--;
        }else{     
            if(count > 1) return false
            count++
            console.log('count', count)
            
            if(s[l+1] === s[r]){
                l+=2;
                r--;     
                console.log('first', count)
            }
            
            else if(s[l] === s[r-1]){
                l++;
                r-=2;     
                
                console.log('second', count)
            }
            
            else {
                console.log('last')
            }
        }
    }
    
    return true;
*/

/* count = 1
eeccccbebaeeabebccceea
l
                     r
                     
count=1 // t

abtcdefgfedzba
  l
           r
   
*/