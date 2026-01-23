/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let pre = new Array(n);
    let suf = new Array(n);
    let res = new Array(n);
    pre[0] = nums[0];
    suf[n-1] = nums[n-1];
    for(let i = 1; i < n; i++){
        pre[i] = nums[i] * pre[i-1];
    }
    for(let i = n-2; i >= 0; i--){
        suf[i] = nums[i] * suf[i+1];
    }
    res[0] = suf[1];
    res[n-1] = pre[n-2];
    for(let i = 1; i < n-1; i++){
        res[i] = pre[i-1]*suf[i+1];
    }
    return res;
};