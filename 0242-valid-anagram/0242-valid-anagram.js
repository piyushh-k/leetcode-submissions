/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        let x = map.get(t[i]);
        if (!x) {
            return false;
        } else if (x > 0) {
            x--
            if (x == 0) {
                map.delete(t[i])
            } else {
                map.set(t[i], x)
            }
        }
    }
    if(map.size > 0){
        return false;
    }
    return true;
};