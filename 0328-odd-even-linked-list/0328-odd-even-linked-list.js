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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let cur = head;
    let temp = new ListNode();
    let itr = temp;
    while(cur && cur.next){
        itr.next = cur.next;
        cur.next = cur.next.next;
        itr = itr.next;
        cur = cur.next;
    }
    itr.next = null;
    cur = head;
    while(cur && cur.next) cur = cur.next;
    cur.next = temp.next;
    return head;

};