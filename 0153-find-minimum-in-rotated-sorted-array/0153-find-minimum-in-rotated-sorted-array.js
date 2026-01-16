/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length;
    let low = 0;
    let high = n-1;
    let min = +Infinity;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] <= nums[high]){
            min = Math.min(nums[mid],min);
            high = mid-1
        } else if(nums[low] <= nums[mid]){
            min = Math.min(nums[low], min);
            low = mid+1;
        }
    }
    return min;
};