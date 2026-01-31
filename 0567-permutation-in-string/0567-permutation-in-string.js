var checkInclusion = function (s1, s2) {
    let n1 = s1.length;
    let k = n1;
    if (n1 > s2.length) return false;
    let freqArr = new Array(26).fill(0);
    let window = new Array(26).fill(0);
    for (let ch of s1) {
        freqArr[ch.charCodeAt(0) - 97]++;
    }
    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        window[s2.charCodeAt(right) - 97]++;
        if (right - left + 1 > k) {
            window[s2.charCodeAt(left) - 97]--;
            left++;
        }
        if (right - left + 1 === k && checkSame(freqArr, window)) {
            return true;
        }
    }
    return false;
};

function checkSame(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
