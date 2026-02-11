var hasCycle = function(head) {
    const s = new Set();
    while (head) {
        if (s.has(head)) return true;
        s.add(head);
        head = head.next;
    }
    return false;
};
