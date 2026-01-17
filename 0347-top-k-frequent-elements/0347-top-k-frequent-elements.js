/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let n = nums.length;
    let map = new Map();
    for(let i = 0; i < n; i++){
        map.set(nums[i] , (map.get(nums[i]) || 0) + 1);
    }
    const arr = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
    return arr.slice(0, k).map((t) => t[0]);
};