/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let low = 0;
    let high = 0;
    let maxS = -Infinity;
    let st = new Set();
    while(high < n){
        if(!st.has(s[high])){
            st.add(s[high]);
            maxS = Math.max(high-low+1 , maxS)
            high++;
        }else {
                st.delete(s[low])
                low++;
        }
    }
    if(maxS == -Infinity){
        return 0
    }else {
        return maxS;
    }
};