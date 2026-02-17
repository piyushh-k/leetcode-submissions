/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    //find middle (slow will be middle in the end)
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let second = slow.next; 
    slow.next = null;   //break list into 2 halves
    let prev = null;

    //reverse the second half
    while(second){
        let hold = second.next;
        second.next = prev;
        prev = second;
        second = hold;
    }
    second = prev;
    let first = head;
    //now merge the two halves 
    while(second){
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }

};