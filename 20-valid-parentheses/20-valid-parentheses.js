/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(let p of s){
        switch(p){
            case '{':
                stack.push('}')
                break
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break
            default:
                if(p !== stack.pop()) return false
                break
        }
    }
    return stack.length === 0
    
    
    /*
    const out = []
    const obj = {
        '{':'}',
        '[':']',
        '(':')'
    }
    
    for(let x in s){
        if(s[x] in obj) out.push(s[x])
        else {
            let pop = out.pop()
            if(pop && s[x] !== obj[pop]) return false
        }
    }
    
    return out.length === 0
    
    */
    
    /*
    const out = []
    const obj = {
        '{': '}',
        '(':')',
        '[':']'
    }
    
    for(let x in s){
        if(s[x] in obj){
            out.push(s[x])
        }else{
            let pv = out.pop()
            if(!pv || obj[pv] !== s[x]) return false
        }
    }
    return out.length?false:true
    
    
    */
};