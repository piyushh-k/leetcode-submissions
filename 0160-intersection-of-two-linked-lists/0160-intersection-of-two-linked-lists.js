var getIntersectionNode = function (headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    function getLength(head) {
        let count = 0;
        let cur = head;
        while (cur) {
            count++;
            cur = cur.next;
        }
        return count; 
    }

    while (lenA > lenB) {
        lenA--;
        headA = headA.next;
    }

    while (lenB > lenA) {
        lenB--;
        headB = headB.next;
    }

    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
};