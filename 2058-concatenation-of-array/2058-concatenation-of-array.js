var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(2 * n);

    for (let i = 0; i < 2 * n; i++) {
        ans[i] = nums[i % n];
    }

    return ans;
};
