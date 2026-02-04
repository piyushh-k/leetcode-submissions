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
        let mid = Math.floor((low+high)/2)
        if(nums[low] <= nums[mid]){
            min = Math.min(min , nums[low]);
            low = mid+1;
        }else if(nums[mid] <= nums[high]){
            min = Math.min(min , nums[mid]);
            high = mid-1;
        }
    }
    return min;
};