/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let n = arr.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
       let need = arr[i];
        if (map.has(2*need)) {
            return true;
        } if (need % 2 === 0 && map.has(need/2)) return true;
        map.set(arr[i],1)
    }
return false;
};