var searchRange = function(nums, target) {
    let n = nums.length;
    let start = -1;
    let end = -1;

    // find start
    let low = 0, high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            start = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // find end
    low = 0;
    high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            end = mid;
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return [start, end];
};
