/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    let i = 0;
    let j = n;
    while(i < n && j < nums.length){
        arr.push(nums[i]);
        arr.push(nums[j]);
        i++;
        j++;
    }
    return arr;
};