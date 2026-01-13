var findErrorNums = function(nums) {
    let repeating = 0;
    let missing = 0;
    let n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            repeating = nums[i];
        } 
        else if (nums[i + 1] !== nums[i] + 1) {
            missing = nums[i] + 1;
        }
    }

    if (nums[0] !== 1) {
        missing = 1;
    }
    if (nums[n - 1] !== n) {
        missing = n;
    }

    return [repeating, missing];
};
