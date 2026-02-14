var removeNthFromEnd = function(head, n) {
    let cur = head;
    let count = 0;
    while (cur) {
        count++;
        cur = cur.next;
    }
    if (n === count)return head.next;
    cur = head;
    for (let i = 1; i < count - n; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head;
};
