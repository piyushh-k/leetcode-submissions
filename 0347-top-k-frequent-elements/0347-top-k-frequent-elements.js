
var topKFrequent = function(nums, k) {
    let n = nums.length;

    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let hashArr = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        hashArr[i] = [];
    }

    for (let [key, val] of map) {
        hashArr[val].push(key);
    }

    let result = [];
    for (let i = n; i >= 0 && result.length < k; i--) {
        for (let num of hashArr[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
};




// var topKFrequent = function(nums, k) {
//     let n = nums.length;
//     let map = new Map();
//     for(let i = 0; i < n; i++){
//         map.set(nums[i] , (map.get(nums[i]) || 0) + 1);
//     }
//     const arr = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
//     return arr.slice(0, k).map((t) => t[0]);
// };