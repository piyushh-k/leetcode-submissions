/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let n = fruits.length;
    let low = 0;
    let high = 0;
    let maxLen = -Infinity;
    let map = new Map();
    while(high < n){
        map.set(fruits[high] , (map.get(fruits[high]) || 0) + 1);
        if(map.size <= 2){
            maxLen = Math.max(maxLen , high - low + 1);
            high++;
        }else {
            while(map.size > 2){
                map.set(fruits[low], map.get(fruits[low]) - 1);
                if(map.get(fruits[low]) === 0){
                    map.delete(fruits[low]);
                }
                low++;
            }
            high++;
        }
    }
    return maxLen;
};