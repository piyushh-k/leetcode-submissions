var longestOnes = function(nums, k) {
    let low = 0;
    let count = 0; 
    let window = 0;

    for (let high = 0; high < nums.length; high++) {
        if (nums[high] === 1) count++;

        let zeroes = (high - low + 1) - count;

        while (zeroes > k) {
            if (nums[low] === 1) count--;
            low++;
            zeroes = (high - low + 1) - count;
        }

        window = Math.max(window, high - low + 1);
    }

    return window;
};
