/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let cur = head;
    let ptr = head;
    let count = 0;
    while(cur){
        count++;
        cur = cur.next;
    }
    let mid = 1;
    if (count % 2 === 0) mid = count/2;
    else mid = Math.floor(count/2);
    for(let i = 1; i <= mid; i++){
        ptr = ptr.next;
    }
    return ptr;
};