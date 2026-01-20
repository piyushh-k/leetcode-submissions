var productExceptSelf = function(nums) {
    let n = nums.length;
    let res = Array(n);
    let pref = Array(n);
    let post = Array(n);

    pref[0] = 1;
    for (let i = 1; i < n; i++) {
        pref[i] = pref[i - 1] * nums[i - 1];
    }

    post[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        post[i] = post[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        res[i] = pref[i] * post[i];
    }

    return res;
};
