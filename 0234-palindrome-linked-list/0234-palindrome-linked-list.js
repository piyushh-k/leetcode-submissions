var isPalindrome = function(head) {
    let str1 = '';
    let str2 = '';
    let curr = head;

    while (curr) {
        str1 = str1 + curr.val;
        str2 = curr.val + str2;
        curr = curr.next;
    }

    return str1 === str2;
};
