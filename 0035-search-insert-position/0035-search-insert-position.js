/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n-1;
    while(low <= high){
        mid = Math.floor((low+high)/2);
        if(nums[mid] == target){
            return mid;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;   
        }
    }
    return low;
};