/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === "") return []
    //if(digits.length < 2) return list[digits]
    let s1 = digits[0]
    let s2 = digits[1]
    let s3 = digits[2]
    let s4 = digits[3]
    
    let list={2: "abc", 3:"def", 4:"ghi", 5:"jkl", 6:"mno", 7:"pqrs", 8:"tuv", 9:"wxyz"}
    let out=[]
    if(digits.length===1){
        for(let a of list[s1])
            out.push(a)
    }
    if(digits.length===2){
        for(let a of list[s1])
            for(let b of list[s2])
                out.push(a+''+b)
    }
    if(digits.length===3){
        for(let a of list[s1])
            for(let b of list[s2])
                for(let c of list[s3])
                    out.push(a+''+b+''+c)
    }
    if(digits.length===4)
        for(let a of list[s1])
            for(let b of list[s2])
                for(let c of list[s3])
                    for(let d of list[s4])
                        out.push(a+''+b+''+c+''+d)
    return out
};