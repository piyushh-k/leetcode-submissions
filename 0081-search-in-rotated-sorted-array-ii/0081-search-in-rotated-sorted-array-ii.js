/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return true;
        if(nums[mid] == nums[low] && nums[low] == nums[high]) {
            low++;
            high--;
        }
        //left half is sorted
        else if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
            //right half is sorted
        } else if (nums[mid] <= nums[high]) {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
};