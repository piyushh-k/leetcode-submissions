var productExceptSelf = function(nums) {
    let zeroCount = 0;
    let n = nums.length;
    let product = 1;

    for (let num of nums) {
        if (num !== 0) {
            product *= num;
        } else {
            zeroCount++;
        }
    }

    if (zeroCount > 1) return Array(n).fill(0);

    let res = new Array(n);

    for (let i = 0; i < n; i++) {
        if (zeroCount === 1) {
            if (nums[i] === 0) res[i] = product;
            else res[i] = 0;
        } else {
            res[i] = product / nums[i];
        }
    }

    return res;
};
