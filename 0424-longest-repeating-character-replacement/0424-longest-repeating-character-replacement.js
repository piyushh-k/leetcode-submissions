/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let n = s.length;
    let map = new Map();
    let low = 0;
    let high = 0;
    let maxWindow = 0;
    while(high < n){
        map.set(s[high] , (map.get(s[high]) ||  0) + 1);
        let maxVal = 0;
        for(let val of map.values()){
            maxVal = Math.max(maxVal , val);
        }
        let currentLen = high-low+1;
        while(currentLen - maxVal > k){
            map.set(s[low] , map.get(s[low]) - 1);
            low++;
            currentLen--;
        }
        maxWindow = Math.max(maxWindow , currentLen);
        high++;
    }
    return maxWindow;
};