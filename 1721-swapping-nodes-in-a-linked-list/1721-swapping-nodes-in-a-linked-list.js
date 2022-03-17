/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let current = head
    let listLength = 0
    let left=0

    while(current){ 
        listLength++
        if(listLength===k) left=current
        current = current.next
    }
    
    let right = head
    for (let i=0; i<listLength-k; i++) {
        right = right.next
    }
    
    let temp = left.val
    left.val = right.val
    right.val = temp
    return head
};