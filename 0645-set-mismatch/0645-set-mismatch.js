/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let map = new Map();
    let repeating = 0;
    let missing = 0;
    for(let num of nums){
        map.set(num , (map.get(num) || 0) + 1);
    }
    for(let i = 1; i <= n; i++){
        if(!map.has(i)){
            missing = i;
        } else if(map.get(i) == 2){
            repeating = i;
        }
    }
    return [repeating , missing];
};