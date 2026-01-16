var maximumCount = function(nums) {
    const n = nums.length;
    let lo = 0, hi = n;
    //first positive
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] > 0) hi = mid;
        else lo = mid + 1;
    }
    const firstPos = lo;

    lo = 0; hi = n;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] >= 0) hi = mid;
        else lo = mid + 1;
    }
    const neg = lo;

    const pos = n - firstPos;
    return Math.max(neg, pos);
};
