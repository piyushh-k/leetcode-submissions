/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //recursive way to approach binary search
var search = function(nums, target) {
    function binary(low, high) {
        if (low > high) return -1;

        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            return binary(low, mid - 1);
        } else {
            return binary(mid + 1, high);
        }
    }

    return binary(0, nums.length - 1);
};
















//binary search using iterations
// var search = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (nums[mid] === target) return mid;
//         else if (target > nums[mid]) low = mid + 1;
//         else high = mid - 1;
//     }
//     return -1; 
// };
