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
var reverseKGroup = function(head, k) {
    let dummy = new ListNode();
    let prev = dummy;
    while(head){
        let start = head;
        let end = getEnd(start , k)
        if(!end) break;
        prev.next = getReverse(start , end.next);
        prev = start;
        head = start.next;
    }
    return dummy.next;
};

function getEnd(start , k){
    while(start && k > 1){
        start = start.next;
        k--;
    }
    return start;
}

function getReverse(start , stop){
    let prev = stop;
    while(start != stop){
        let temp = start.next;
        start.next = prev;
        prev = start;
        start = temp;
    }
    return prev;
}