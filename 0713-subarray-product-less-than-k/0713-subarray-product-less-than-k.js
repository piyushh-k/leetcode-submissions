var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;
    let product = 1;
    let low = 0;
    let count = 0;
    for (let high = 0; high < nums.length; high++) {
        product = product * nums[high];
        while (product >= k) {
            product /= nums[low];
            low++;
        }
        count = count + (high - low + 1);
    }
    return count;
};
